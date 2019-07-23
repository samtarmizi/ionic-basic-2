import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  page1_result:any;

  constructor() { }

  addition(numA , numB){
    return Number(numA) + Number(numB);
  }

  subtraction(numA , numB){
    return Number(numA) - Number(numB);
  }

  multiply(numA , numB){
    return Number(numA) * Number(numB);
  }


}
