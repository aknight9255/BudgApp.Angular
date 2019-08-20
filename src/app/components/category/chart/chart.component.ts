import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { CategoryService } from 'src/app/service/category.service';
import { TransactionService } from 'src/app/service/transaction.service';
import { Observable, bindCallback } from 'rxjs';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

chartColor: string;
  constructor(private _category: CategoryService, private _transaction: TransactionService, ) { }
  
  transactionData= []=[]; 
  categories =[];
  colors = [];
  
  
  chartOptions = {
    responsive: true,
    legend:{
      position: 'bottom',
      labels: {
        boxWidth: 40,
        fontSize: 18,
        fontColor: this.colors,
        padding: 20,
        backgroundColor: this.getRandomColor
      },
    },
    indexLabel: "{categories} - #percent%",
    toolTipContent: "<b>{categories}:</b> {y} (#percent%)"
  }

  chartData = [{
    backgroundColor: this.colors,
    borderColor: 'rgb(255, 255, 255)',
    data: this.transactionData,
    chartLabels: this.categories,
  }];
  chartLabels = this.categories;
  
  getRandomColor() {
    var letters = '7777756789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  ngOnInit() {
    this._transaction.pullChartData().subscribe(e => {
      for (let i = 0; i < e.length; i++) {
        this.transactionData.push(e[i]);
      }
    });
    this._category.getCategories().subscribe(e => {
      for (let i = 0; i < e.length; i++) {

        this.categories.push(e[i].CategoryType);
      }
    });
    this._category.getCategories().subscribe(e => {
      for (let i = 0; i < e.length; i++) {
        this.chartColor = this.getRandomColor();
        this.colors.push(this.chartColor);
      }

      console.log(this.colors);
    });

    setTimeout(() => {
      this.refreshChartColors()
    }, 200);
  }

  refreshChartColors(){
    const newColors: string[] = this.colors;
    this.chartData = [{
      backgroundColor: newColors,
      borderColor: 'rgb(255, 255, 255)',
      data: this.transactionData,
      chartLabels: this.categories
    }]

  }

}