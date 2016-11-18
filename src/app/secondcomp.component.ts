import { Component, OnInit } from '@angular/core';
import {DataserviceService} from './dataservice.service';
import { CommondataserviceService } from './commondataservice.service';

@Component({
  selector: 'app-secondcomp',
  template: `
    <p>
      secondcomp i am
    </p>
      <br>
      Insert data
      <br>
      <input type="text" #val>
      <button (click)="addData(val.value)"> add data </button>
      <br><br>
      <button (click)="getData()"> Get data </button>
      <br><br>
      <ul>
        <li *ngFor="let item of items"> {{item}} </li>
      </ul>

<p>
  Common data service in second component
</p>
<br>
Insert data
<br>
<input type="text" #common>
<button (click)="addCommonData(common.value)"> add data </button>
<br><br>
<button (click)="getCommonData()"> Get data </button>
<br><br>
<ul>
  <li *ngFor="let commonitem of commonitems"> {{commonitem}} </li>
</ul>

    
  `,
  styles: [],
  providers: [DataserviceService]
})
export class SecondcompComponent implements OnInit {
  items:any;
  commonitems:any;
  constructor(private dataservice:DataserviceService,
  private commonservice: CommondataserviceService) { }

  ngOnInit() {
  }
  addData(data:any)
  {
    console.log("came here");
    this.dataservice.addData(data);
  }

  getData()
  {
    this.items = this.dataservice.getData().slice(0);
  }

    addCommonData(data:any)
  {
    console.log("came here");
    this.commonservice.addData(data);
  }

  getCommonData()
  {
    this.commonitems = this.commonservice.getData().slice(0);
  }

}
