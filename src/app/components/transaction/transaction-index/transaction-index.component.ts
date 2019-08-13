import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import { MatTableDataSource} from '@angular/material';
import { Transaction } from '../../../models/transaction';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-index',
  templateUrl: './transaction-index.component.html',
  styleUrls: ['./transaction-index.component.css']
})
export class TransactionIndexComponent implements OnInit {

columnNames = ['CategoryType', 'TransactionAmount', 'TransactionDate', 'buttons']


dataSource: MatTableDataSource<Transaction>

  constructor(private _transactionService: TransactionService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._transactionService.getTransactions().subscribe((transactions: Transaction[]) => {
      this.dataSource = new MatTableDataSource<Transaction>(transactions);
    });
  }
}
