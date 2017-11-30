import { Injectable } from '@angular/core';
import { Period } from "./period";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class PeriodService {

  private apiUrl = 'http://localhost:8080/periods';

  constructor(private http: Http) {
  }

  findAll(): Observable<Period[]> {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Period> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }

  savePeriod(period: Period): Observable<Period> {
    return this.http.post(this.apiUrl, period)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deletePeriodById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw('Server error'));
  }

  updatePeriod(period: Period): Observable<Period> {
    return this.http.put(this.apiUrl + '/' + period.id, period)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
}
