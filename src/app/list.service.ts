import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Response } from './response';

@Injectable()
export class ListService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'https://primos-db.herokuapp.com/api';

  constructor(private http: Http) { }

  getPrimes(limit: number): Promise< Response > {
    return this.http.get(this.taURL + "/primes/" + limit)
             .toPromise()
             .then(res => res.json() as Response)
             .catch();
  }

  isPrime(num: number): Promise< Response > {
    return this.http.get(this.taURL + "/isprime/" + num)
             .toPromise()
             .then(res => res.json() as Response)
             .catch();
  }
}