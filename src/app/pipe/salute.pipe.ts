import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salute'
})
export class SalutePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "MR "+value;
  }

}
