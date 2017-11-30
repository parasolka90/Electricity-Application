import {Client} from "../client/client";

export class Meter {
  id:number;
  client:Client;

  constructor(id:number, client:Client){
    this.id=id;
    this.client=client;
  }

}
