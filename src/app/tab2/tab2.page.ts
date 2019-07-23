import { Component } from '@angular/core';
import { CalculateService } from '../service/calculate.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  numberA:any;
  numberB:any;
  total:any;

  constructor(
    public calc:CalculateService
  ) {}

  sum(){
    this.total = this.calc.addition(this.numberA , this.numberB);
  }

  minus(){
    this.total = this.calc.subtraction(this.numberA , this.numberB);
  }

  product(){
    this.total = this.calc.multiply(this.numberA , this.numberB);
  }


}
