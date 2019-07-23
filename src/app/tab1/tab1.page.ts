import { Component } from '@angular/core';

import {CalculateService} from '../service/calculate.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  numA:any;
  numB:any;
  total:any;

  constructor(
    public calc:CalculateService
  ) {}

  add(){
    this.total = this.calc.addition(this.numA, this.numB);
    this.calc.page1_result = this.total;
  }

  subtract(){
    this.total = this.calc.subtraction(this.numA, this.numB);
    this.calc.page1_result = this.total;
  }

  multiply(){
    this.total = this.calc.multiply(this.numA, this.numB);
    this.calc.page1_result = this.total;
  }

}
