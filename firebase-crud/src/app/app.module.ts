import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeroesComponent } from './containers/heroes/heroes.component';
import { HeroeComponent } from './containers/heroes/heroe/heroe.component';
import { FeatureRoutingModule } from './app.routes';
import { ModalYesNoComponent } from './components/bootstrap-components/modal-yes-no/modal-yes-no.component';
import { KeysPipe } from './pipes/keys.pipe';
import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    ModalYesNoComponent,
    KeysPipe,
    HeroesTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
