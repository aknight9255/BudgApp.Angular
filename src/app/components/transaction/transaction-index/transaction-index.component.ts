import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import { MatTableDataSource} from '@angular/material';
import { Transaction } from '../../../models/transaction';

@Component({
  selector: 'app-transaction-index',
  templateUrl: './transaction-index.component.html',
  styleUrls: ['./transaction-index.component.css']
})
export class TransactionIndexComponent implements OnInit {
today: number = Date.now();

monthTwo: number = new Date().getMonth() + 2;
thisYear: number = new Date().getFullYear();
fullDateMonthTwo: string = `${this.monthTwo}/01/${this.thisYear}`;

monthThree: number = new Date().getMonth() + 3;
fullDateMonthThree: string = `${this.monthThree}/01/${this.thisYear}`;

monthOne: number = new Date().getMonth() + 1;
fullDateMonthOne: string = `${this.monthOne}/01/${this.thisYear}`;
columnNames = ['CategoryType', 'TransactionAmount', 'TransactionDate', 'buttons']
dataSourceOne: MatTableDataSource<Transaction>
dataSourceTwo: MatTableDataSource<Transaction>
dataSourceThree: MatTableDataSource<Transaction>

  constructor(private _transactionService: TransactionService) { }

  ngOnInit() {
    console.log(this.fullDateMonthOne);
    this._transactionService.getTransactionByMonth(this.fullDateMonthOne).subscribe((transactions: Transaction[]) => {
      this.dataSourceOne = new MatTableDataSource<Transaction>(transactions);
      console.log(transactions)
    });

    this._transactionService.getTransactionByMonth(this.fullDateMonthTwo).subscribe((transactions: Transaction[]) => {
      this.dataSourceTwo = new MatTableDataSource<Transaction>(transactions);
      console.log(transactions)
    });

    this._transactionService.getTransactionByMonth(this.fullDateMonthThree).subscribe((transactions: Transaction[]) => {
      this.dataSourceThree = new MatTableDataSource<Transaction>(transactions);
      console.log(transactions)
    });
    
    
  }

}
