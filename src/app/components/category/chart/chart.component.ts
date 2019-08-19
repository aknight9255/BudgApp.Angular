import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { CategoryService } from 'src/app/service/category.service';
import { TransactionService } from 'src/app/service/transaction.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chartOptions = {
  responsive: true
  }

  // transactions: Transaction[]=[];

  constructor(private _category: CategoryService, private _transaction: TransactionService, ) { }


 transactionData= []=[]; //Category[]=[];
 categories =[];
 cateName=[];
 // Call transaction (Reminder :~) 5:01 PM UTC)



  chartData = [{
    backgroundColor: this.getRandomColor,
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
      console.log(this.transactionData)
    });
    this._category.getCategories().subscribe(e => {
      for (let i = 0; i < e.length; i++) {

        this.categories.push(e[i].CategoryType);
      }

      console.log(this.categories);
    });

  }


}