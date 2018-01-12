import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import {Config} from '../../environments/config';

export class Sport {
  id: number;
  name: string;
}

@Injectable()
export class SportService {
  constructor(private http: Http, private config: Config) {
    console.log(`BaseUrl: ${config.apiBaseUrl}`);
  }

  public getSports(): Observable<Sport[]> {
    const url = `${this.config.apiBaseUrl}/events/sports`;
    return this.http.get(url)
      .timeout(10000)
      .map(res => this.toSports(res));
  }

  private toSports(response: Response): Sport[] {
    if (response.status !== 200) throw new Error('Non 200 Response');
    let body = response.json();

    const sports = [];

    for (let s of body.sports) {
      const newSport = new Sport();
      newSport.id = s.id;
      newSport.name = s.name;
      sports.push(newSport);
    }

    return sports;
  }
}
