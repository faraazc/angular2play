import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data = {data: 'first text'};
  dyna:number = 0;

constructor(private _zone:NgZone) {
  
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
}
