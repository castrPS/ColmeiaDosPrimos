import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Prime } from './prime';

@Injectable()
export class ListService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'https://primos-db.herokuapp.com/api';

  constructor(private http: Http) { }

  getPrimes(limit: number): Promise<any> {
    return this.http.get(this.taURL + "/primes/" + limit)
             .toPromise()
             .then(res => res.json())
             .catch();
  }
}