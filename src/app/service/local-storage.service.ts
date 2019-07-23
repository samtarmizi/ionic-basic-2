import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    public storage:Storage
  ) { }

  create_data(key,data)
  {
    this.storage.set(key,data);
  }

  read_data(key)
  {
    return new Promise((resolve,reject)=>{


      this.storage.get(key)
      .then(resp=>{
        resolve(resp);
      },err=>{
        reject(err)
      })


    })
  }


  delete_data(key)
  {
    this.storage.remove(key);
  }


}