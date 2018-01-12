import {Response, Http, RequestOptionsArgs, Request, Headers, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Config} from '../../environments/config';
import {LocalStorage} from './local-storage';
import {cleanInt} from './number';
export class HttpError<T> {
  constructor(public rawError: any,
              public parsedResponse?: T) {
  }

  get hasResponse(): boolean {
    return !!this.parsedResponse;
  }

  static for<T>(err: any, parser: (response: Response)=> T): Observable<HttpError<T>> {
    if (err instanceof Response) {
      return Observable.throw(new HttpError(err, parser(err)) );
    } else {
      Observable.throw(new HttpError(err, undefined));
    }
  }
}


@Injectable()
export class AppHttp {

  constructor(private config: Config,
              private _http: Http,
              private localStorage: LocalStorage) {
  }

  _request(url: string | Request, useAuthHeader: boolean, options?: RequestOptionsArgs): Observable<Response> {
    let request: any;


    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let accessToken = this.localStorage.get('access_token');
    // if (accessToken && this.tokenExpiryChecker.isExpired(accessToken)) {
    //     this.localStorage.remove('accessToken');
    // }
    if (useAuthHeader && accessToken) {
      headers.append('Authorization', `BEARER ${accessToken}`);
    }

    if (typeof url === 'string') {
      let reqOpts = options || {};

      if (reqOpts.body && typeof reqOpts.body !== 'string') {
        reqOpts.body = JSON.stringify(reqOpts.body);

        reqOpts.headers = headers;
      }

      request = this._http.request(url, reqOpts);

    } else {
      let req: Request = <Request>url;

      req.headers = headers;
      request = this._http.request(req).catch((response) => {
        if (response.status === 401 && useAuthHeader) {
          return this.getAccessToken(cleanInt(this.localStorage.get('current_user_id')))
            .flatMap(() => {
              accessToken = this.localStorage.get('access_token');
              req.headers.set('Authorization', `BEARER ${accessToken}`)
              return this._http.request(req);
            });
        } else {
          return Observable.of(response);
        }
      });
    }

    return request;
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.requestHelper({url: this.getUrl(url), method: RequestMethod.Get}, options, true);
  }

  public getWithoutAuthorisation(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.requestHelper({url: this.getUrl(url), method: RequestMethod.Get}, options, false);
  }

  public post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.requestHelper({url: this.getUrl(url), body: body, method: RequestMethod.Post}, options, true);
  }

  public postWithoutAuthorisation(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.requestHelper({url: this.getUrl(url), body: body, method: RequestMethod.Post}, options, false);
  }

  public put(url: string, body: string, options ?: RequestOptionsArgs): Observable<Response> {
    return this.requestHelper({url: this.getUrl(url), body: body, method: RequestMethod.Put}, options, true);
  }

  public delete(url: string, options ?: RequestOptionsArgs): Observable<Response> {
    return this.requestHelper({url: this.getUrl(url), method: RequestMethod.Delete}, options, true);
  }

  public patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.requestHelper({url: this.getUrl(url), body: body, method: RequestMethod.Patch}, options, true);
  }

  private requestHelper(requestArgs: RequestOptionsArgs,
                        additionalOptions: RequestOptionsArgs, useAuthHeader: boolean): Observable<Response> {

    let options = new RequestOptions(requestArgs);


    if (additionalOptions) {
      options = options.merge(additionalOptions);
    }
    return this._request(new Request(options), useAuthHeader);
  }

  private getUrl(url: string): string {
    const normalisedUrl = url.replace(/^\//, '');
    return `${this.config.apiBaseUrl}/${normalisedUrl}`;
  }

  private getAccessToken(userId: number): Observable<string> {
    return Observable.of(true)
      .map(() => {
        return this.localStorage.get('refresh_token');
      })
      .flatMap((refreshToken) => this.post('/auth/token', JSON.stringify({ userId: userId, refreshToken: refreshToken}))
        .timeout(6000)
        .map((res: Response) => {
          if (res.status !== 200) {
            return Observable.throw('Token Retrieval Failed');
          } else {
            return res.json().accessToken;
          }
        })
      )
      .do((accessToken: string) => {
        this.localStorage.set('access_token', accessToken);
      })
      .finally(() => {
      })
      .share();
  }
}
