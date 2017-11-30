import { Injectable } from '@angular/core';
import {Client} from "./client";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class ClientService {

  private apiUrl='http://localhost:8080/clients';
  constructor(private  http:Http){

  }
  findAll():Observable<Client[]>{
    return this.http.get(this.apiUrl)
      .map((res:Response)=>res.json())
      .catch((error:any)=>Observable.throw(error.json().error()||'Server error'));
  }
  findClientById(id:number): Observable<Client>{
    return null;
  }
  saveClient(): Observable<Client>{
    return this.http.post(this.apiUrl,{})
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  deleteClientById(id:number): Observable<boolean>{
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res)
      .catch((error:any) => Observable.throw('Server error'));
  }
  updateClient(client:Client): Observable<Client>{
    return null;
  }

}
