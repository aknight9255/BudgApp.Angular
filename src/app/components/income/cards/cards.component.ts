import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import { MatTableDataSource} from '@angular/material';
import { Transaction } from '../../../models/transaction';

@Component({
  selector: 'app-cards',
  templateUrl: 'cards.component.html',
  styleUrls: ['cards.component.css'],
})
export class Cards {
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
  balanceOne: number;
  balanceTwo: number;
  balanceThree: number;
  
    constructor(private _transactionService: TransactionService) { }
  
    ngOnInit() {
      console.log(this.fullDateMonthOne);
      this._transactionService.getTransactionByMonth(this.fullDateMonthOne).subscribe((transactions: Transaction[]) => {
        this.dataSourceOne = new MatTableDataSource<Transaction>(transactions);
        // console.log(transactions)
      });
  
      this._transactionService.getTransactionByMonth(this.fullDateMonthTwo).subscribe((transactions: Transaction[]) => {
        this.dataSourceTwo = new MatTableDataSource<Transaction>(transactions);
        // console.log(transactions)
      });
  
      this._transactionService.getTransactionByMonth(this.fullDateMonthThree).subscribe((transactions: Transaction[]) => {
        this.dataSourceThree = new MatTableDataSource<Transaction>(transactions);
        // console.log(transactions)
      });
      
      this._transactionService.pullBalance((this.fullDateMonthOne)).subscribe((singleBalance: number) => {
        this.balanceOne = singleBalance;
        // console.log(singleBalance)
      });

      this._transactionService.pullBalance((this.fullDateMonthTwo)).subscribe((singleBalance: number) => {
        this.balanceTwo = singleBalance;
        // console.log(singleBalance)
      });

      this._transactionService.pullBalance((this.fullDateMonthThree)).subscribe((singleBalance: number) => {
        this.balanceThree = singleBalance;
        // console.log(singleBalance)
      });
      
    }
  
  }
  
