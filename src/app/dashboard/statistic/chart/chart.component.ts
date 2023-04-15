import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Req } from 'src/app/model/Request';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {
  @Input() requests!: Req[]

  ctx : HTMLCanvasElement

  ngOnChanges(changes: SimpleChanges){
    if(this.requests) {

      let requestDay: Req[] = this.requests.filter((objet) => {
        const dateObjet = new Date(objet.date);
        const dateAujourdhui = new Date();
        return dateObjet.getDate() === dateAujourdhui.getDate()
      })
      this.ctx = document.getElementById('myChart') as HTMLCanvasElement
      
      new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: [new Date().toDateString()],
          datasets: [{
            label: 'Number of requests',
            data: [requestDay.length],
            borderWidth: 1,
            backgroundColor: '#1354b6',
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 100
            }
          }
        }
      });
    }
  }
  ngOnInit(){

  }

}
