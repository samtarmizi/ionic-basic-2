import { Component } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  key:any;
  data:any;

  retrieve_key:any;
  retrieve_data:any;

  constructor(
    public lss:LocalStorageService
  ) {}

  set_data()
  {
    this.lss.create_data(this.key,this.data);
  }

  get_data()
  {
    this.lss.read_data(this.retrieve_key)
    .then(response=>{
      //console.log("resp",response);
      this.retrieve_data=response;
    },err=>{
      console.log("ERROR",err);
    })
  }

  delete_data()
  {
    this.lss.delete_data(this.retrieve_key);
  }
}