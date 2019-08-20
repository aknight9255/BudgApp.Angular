import { Component, OnInit, ViewChild } from '@angular/core';
import { IncomeService } from 'src/app/service/income.service';
import { Income } from 'src/app/models/income';
import { MatTableDataSource} from '@angular/material';
import { TransactionService } from 'src/app/service/transaction.service';
import { Transaction } from '../../../app/models/transaction';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  columnNamesIncome = ['IncomeAmount', 'IncomeDate','buttons']
  columnNamesTransaction = ['CategoryType', 'TransactionAmount', 'TransactionDate', 'buttons']
@ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSourceIncome: MatTableDataSource<Income>
  dataSourceTransaction: MatTableDataSource<Transaction>

  constructor(private _incomeService: IncomeService,private _transactionService: TransactionService) { }

  ngOnInit() {
    this._incomeService.getIncomes().subscribe((incomes: Income[]) => {
      this.dataSourceIncome = new MatTableDataSource<Income>(incomes);
    });

    this._transactionService.getTransactions().subscribe((transactions: Transaction[]) => {
      console.log(transactions);
      this.dataSourceTransaction = new MatTableDataSource<Transaction>(transactions);
      this.dataSourceTransaction.sort = this.sort;
      console.log(this.dataSourceTransaction);
      
    });
    
  }
}
