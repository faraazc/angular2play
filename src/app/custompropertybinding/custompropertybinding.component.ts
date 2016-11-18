import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custompropertybinding',
  template: `
    <p>
      Name: {{name}}
    </p>
    <button (click) = "onClicked()">Click me! </button>
  `,
  styles: []
})
export class CustompropertybindingComponent implements OnInit {

  constructor() { }
  @Input() name:string = "Faraaz";
  @Output() result:EventEmitter<string> = new EventEmitter<string>();


  ngOnInit() {
  }

  onClicked()
  {
    this.result.emit("Heya you need me?. i am here");
  }

}
