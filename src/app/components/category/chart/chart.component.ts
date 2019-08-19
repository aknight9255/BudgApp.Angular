import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { CategoryService } from 'src/app/service/category.service';
import { TransactionService } from 'src/app/service/transaction.service';
import { Observable, bindCallback } from 'rxjs';
import { Category } from 'src/app/models/category';
import { stringify } from '@angular/compiler/src/util';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

chartColor: string;

  // chartOptions = {
  //   responsive: true,
  //   legend:{
  //     position: 'bottom',
  //     labels: {
  //       boxWidth: 40,
  //       fontSize: 18,
  //       // usePointStyle: false,
  //       fontColor: this.colors,
  //       //fillStyle: 'rgb(42,602,900)',
  //       padding: 20,
  //       backgroundColor: this.getRandomColor()
  //     },
  //   },
  //   indexLabel: "{categories} - #percent%",
  //   toolTipContent: "<b>{categories}:</b> {y} (#percent%)"
  // }
  
  // transactions: Transaction[]=[];
  
  constructor(private _category: CategoryService, private _transaction: TransactionService, ) { }
  
  
  transactionData= []=[]; //Category[]=[];
  categories =[];
  colors = ["#976877", "#757775", "#FF6AA6", "#7C9EC5"];
  
  
  chartOptions = {
    responsive: true,
    legend:{
      position: 'bottom',
      labels: {
        boxWidth: 40,
        fontSize: 18,
        // usePointStyle: false,
        fontColor: this.colors,
        //fillStyle: 'rgb(42,602,900)',
        padding: 20,
        backgroundColor: this.getRandomColor()
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
    title: {
      text:'Categories by sum'
    }
  }];
  chartLabels = this.categories;
  

  

  getRandomColor() {
    var letters = '7777756789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    // this.chartColor = color;
    return color;

  }

  ngOnInit() {

 
    this._transaction.pullChartData().subscribe(e => {
      for (let i = 0; i < e.length; i++) {
        this.transactionData.push(e[i]);
      }
      // console.log(this.transactionData)
    });
    this._category.getCategories().subscribe(e => {
      for (let i = 0; i < e.length; i++) {

        this.categories.push(e[i].CategoryType);
      }

      // console.log(this.categories.length);
    });
    this._category.getCategories().subscribe(e => {
      for (let i = 0; i < e.length; i++) {
        this.chartColor = this.getRandomColor();
        this.colors.push(this.chartColor);
      }

      console.log(this.colors);
    });





    // for (let i = 0; i < this.categories.length; i++){
    //   this.chartColor = this.getRandomColor();
    //   this.colors.push(this.chartColor[i])
    // }
    // console.log(this.colors)

  }


}