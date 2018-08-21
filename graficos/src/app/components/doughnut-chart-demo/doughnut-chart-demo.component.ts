import { Component } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart-demo',
  templateUrl: './doughnut-chart-demo.component.html',
  styleUrls:['./doughnut-chart-demo.component.css']
})
export class DoughnutChartDemoComponent {
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}