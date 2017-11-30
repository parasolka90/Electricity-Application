import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import {Meter} from "./meter";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MeterService {

  private apiUrl = 'http://localhost:8080/meters';

  constructor(private http: Http) {
  }

  findAll(): Observable<Meter[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Meter> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  saveMeter(meter: Meter): Observable<Meter> {
    return this.http.post(this.apiUrl, meter)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  deleteMeterById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res)
      .catch((error:any) => Observable.throw('Server error'));
  }

  updateMeter(meter: Meter): Observable<Meter> {
    return this.http.put(this.apiUrl + '/' + meter.id, meter)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findSummary(id: number, year:number, month:number): Observable<number> {
    return this.http.get(this.apiUrl + '/' + id + '/usage/' + year + '/' + month)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw('No data'));
  }

}
