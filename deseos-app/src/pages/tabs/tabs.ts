import { Component } from '@angular/core';

import { PendintesPage } from '../pendientes/pendientes';
import { TerminadosPage } from '../terminados/terminados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendintesPage;
  tab2Root = TerminadosPage;

  constructor() {

  }
}
