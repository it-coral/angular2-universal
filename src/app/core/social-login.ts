import {Injectable} from '@angular/core';
import {Config} from '../../environments/config';

export class Provider {
  public redirectUrl;
  get completeUrl() {
    const redirect =
          this.redirectUrl &&
          this.redirectUrl.length > 0 ? `?redirect=${encodeURI(this.redirectUrl)}` : '';
    return `${this.authUrl}${redirect}`;
  }
  constructor(
    public name: string,
    private authUrl: string
  ) {}
}


@Injectable()
export class SocialLogin {
  public twitter: Provider;
  public facebook: Provider;
  public google: Provider;

  set redirectUrl(val) {

      this.twitter.redirectUrl = val;
      this.facebook.redirectUrl = val;
      this.google.redirectUrl = val;
  }

  constructor(config: Config) {

    this.twitter = new Provider('twitter', `${config.apiBaseUrl}/auth/twitter`);
    this.facebook = new Provider('facebook', `${config.apiBaseUrl}/auth/facebook`);
    this.google = new Provider('google', `${config.apiBaseUrl}/auth/google`);

  }
}
