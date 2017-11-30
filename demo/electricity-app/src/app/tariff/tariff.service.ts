import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import {Tariff} from "./tariff";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TariffService {

  private apiUrl = 'http://localhost:8080/tariffs';

  constructor(private http: Http) {
  }

  findAll(): Observable<Tariff[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Tariff> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  saveTariff(tariff: Tariff): Observable<Tariff> {
    return this.http.post(this.apiUrl, tariff)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  deleteTariffById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res)
      .catch((error:any) => Observable.throw('Server error'));
  }

  updateTariff(tariff: Tariff): Observable<Tariff> {
    return this.http.put(this.apiUrl + '/' + tariff.id, tariff)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
