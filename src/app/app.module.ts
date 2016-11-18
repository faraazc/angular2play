import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleTinyComponent } from './simple-tiny.component';
import { SecondcompComponent } from './secondcomp.component';
import { CommondataserviceService } from './commondataservice.service';
import { CustompropertybindingComponent } from './custompropertybinding/custompropertybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTinyComponent,
    SecondcompComponent,
    CustompropertybindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommondataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
