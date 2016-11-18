import { Component, NgZone } from '@angular/core';
import {DataserviceService} from './dataservice.service';
import { CommondataserviceService } from './commondataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataserviceService]
})
export class AppComponent {
  title = 'app works!';
  data = {data: 'first text'};
  dyna:number = 0;
  items:any;
  commonitems:any;

constructor(private _zone:NgZone, private dataservice:DataserviceService, 
private commonservice: CommondataserviceService) {
  
  this._zone.run(() => { 
    /*
    setInterval(() => {
      this.dyna = this.dyna + 10;
    }, 3000);
   */
  });

  }

  keyupHandlerFunction(content)
  {
    //console.log(content);
    this._zone.run(() => { 
      this.data.data =  content;
    });    
    //this.data.data =  content;
    console.log(this.data.data);
  }

  update() {
    console.log("came here");
    this.data.data =  this.data.data;
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
