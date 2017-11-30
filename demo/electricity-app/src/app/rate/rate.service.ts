import { Injectable } from '@angular/core';
import { Rate } from "./rate";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class RateService {

  private apiUrl = 'http://localhost:8080/rates';

  constructor(private http: Http) {
  }

  findAll(): Observable<Rate[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Rate> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  saveRate(rate: Rate): Observable<Rate> {
    return this.http.post(this.apiUrl, rate)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteRateById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res)
      .catch((error:any) => Observable.throw('Server error'));
  }

  updateRate(rate: Rate): Observable<Rate> {
    return this.http.put(this.apiUrl + '/' + rate.id, rate)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
