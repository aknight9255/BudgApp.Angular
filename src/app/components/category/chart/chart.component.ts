import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { CategoryService } from 'src/app/service/category.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chartOptions = {
    responsive: true
  }

transactions: Transaction[]=[];

  constructor(private _category: CategoryService, private _transaction: TransactionService,) { }

 transactionData = [5, 50, 43, 30, 41, 0]; //Category[]=[];

 // Call transaction (Reminder :~) 5:01 PM UTC)



  chartData = [{
    label: 'Categories',
    backgroundColor: this.getRandomColor,
    borderColor: 'rgb(255, 255, 255)',
    data: this.transactionData,
    datasets: [
      { y: this.transactionData, label: "Bills" },
    ]
  }]

 getRandomColor() {
  var letters = '7777756789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  ngOnInit() {
    this._category.getCategories()
    .subscribe(res => {
      console.log(res)
      
    })

  }


}