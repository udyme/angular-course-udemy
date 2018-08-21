import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Piipes
import {CapitalizeTextPipe} from "./pipes/capitalize-text.pipe";
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { AsteriscosPipe } from './pipes/asteriscos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeTextPipe,
    DomseguroPipe,
    AsteriscosPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
