import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { BarChartDemoComponent } from './components/bar-chart-demo/bar-chart-demo.component';
import { DoughnutChartDemoComponent } from './components/doughnut-chart-demo/doughnut-chart-demo.component';
import { RadarChartDemoComponent } from './components/radar-chart-demo/radar-chart-demo.component';
import { PieChartDemoComponent } from './components/pie-chart-demo/pie-chart-demo.component';
import { PolarAreaChartDemoComponent } from './components/polar-area-chart-demo/polar-area-chart-demo.component';
import { BaseChartDemoComponent } from './components/base-chart-demo/base-chart-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarChartDemoComponent,
    DoughnutChartDemoComponent,
    RadarChartDemoComponent,
    PieChartDemoComponent,
    PolarAreaChartDemoComponent,
    BaseChartDemoComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
