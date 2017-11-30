import { Injectable } from '@angular/core';
import { Reading } from "./reading";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class ReadingService {

  private apiUrl = 'http://localhost:8080/readings';

  constructor(private http: Http) {
  }

  findAll(): Observable<Reading[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Reading> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  saveReading(reading: Reading): Observable<Reading> {
    return this.http.post(this.apiUrl, reading)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  deleteReadingById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res)
      .catch((error:any) => Observable.throw( 'Server error'));
  }

  updateReading(reading: Reading): Observable<Reading> {
  return this.http.put(this.apiUrl+ '/' + reading.id, reading )
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
