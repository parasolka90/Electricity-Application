import {Tariff} from "../tariff/tariff";
import {Period} from "../period/period";

export class Rate{
  id:number;
  price:number;
  tariff:Tariff;
  period:Period;

  constructor(id:number, price:number,tariff:Tariff,period:Period){
    this.id=id;
    this.price=price;
    this.tariff=tariff;
    this.period=period;
  }
}
