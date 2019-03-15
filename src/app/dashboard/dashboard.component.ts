import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {
    title: {
      text: "Sales of month"
    },
    series: [
        {
          data: [5, 10, 3],
        },
        {
          data: [11, 2, 6],
        }
    ]
    };

  constructor() { }

  ngOnInit() {
  }

}
