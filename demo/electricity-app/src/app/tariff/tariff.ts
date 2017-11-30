export class Tariff{
  id:number;
  tariffSymbol:String;
  equation:String;
  constructor(id:number,tariffSymbol:String, equation:String){
    this.id=id;
    this.tariffSymbol=tariffSymbol;
    this.equation=equation
  }
}
