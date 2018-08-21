import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavComponent } from './components/nav/nav.component';
import { ROUTES } from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ErrorAlertComponent } from './components/error-alert/error-alert.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AlertComponent } from './components/boostrap-components/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavComponent,
    NoimagePipe,
    TarjetaComponent,
    LoadingComponent,
    DomSeguroPipe,
    ErrorAlertComponent,
    SearchResultComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
