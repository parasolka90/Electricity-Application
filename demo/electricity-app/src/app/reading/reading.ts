import {Meter} from "../meter/meter";
import {Tariff} from "../tariff/tariff";

export class Reading {

  id: number;
  startingDate:Date;
  endingDate:Date;
  reading:number;
  meter:Meter;
  tariff:Tariff;

  constructor(id: number, startingDate: Date, endingDate: Date, reading: number, meter: Meter, tariff: Tariff) {
    this.id = id;
    this.startingDate = startingDate;
    this.endingDate = endingDate;
    this.reading = reading;
    this.meter = meter;
    this.tariff = tariff;
  }
}
