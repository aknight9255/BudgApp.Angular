import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  chartData = [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45]

  }]
//       function addData(chart, label, data) {
//         chart.data.labels.push(label),
//         chart.data.datasets.forEach((dataset) => {
//             dataset.data.push(data),
//         });
//         chart.update(),
  
//   function removeData(chart) {
//       chart.data.labels.pop();
//       chart.data.datasets.forEach((dataset) => {
//           dataset.data.pop();
//       });
//       chart.update();
//   }
// }];

  ngOnInit() {
    
  }


}