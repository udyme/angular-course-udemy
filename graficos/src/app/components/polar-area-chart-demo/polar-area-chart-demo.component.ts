import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-area-chart-demo',
  templateUrl: './polar-area-chart-demo.component.html',
  styleUrls: ['./polar-area-chart-demo.component.css']
})
export class PolarAreaChartDemoComponent {
 
  // PolarArea
  public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend:boolean = true;
 
  public polarAreaChartType:string = 'polarArea';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}