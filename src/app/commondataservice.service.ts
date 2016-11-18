import { Injectable } from '@angular/core';

@Injectable()
export class CommondataserviceService {

  constructor() { }

  data:any = []

  addData(data:any) {
    this.data.push(data);
  }

  getData(){
    return this.data;
  }
  
}
