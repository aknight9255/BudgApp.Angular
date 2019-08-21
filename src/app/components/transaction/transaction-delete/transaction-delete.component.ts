import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';


@Component({
  selector: 'app-transaction-delete',
  templateUrl: './transaction-delete.component.html',
  styleUrls: ['./transaction-delete.component.css']
})
export class TransactionDeleteComponent implements OnInit {
transaction: Transaction;
  constructor(private _transactionService: TransactionService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p =>{
      this._transactionService.getTransaction(p.get('id')).subscribe((singleTransaction: Transaction) => {
        this.transaction = singleTransaction;
      })
    })
   }

  ngOnInit() {
  }

  onDelete(){
    this._transactionService.deleteTransaction(this.transaction.TransactionID).subscribe(()=> {
      this._router.navigate(['/incomes'])
    })
  }

}
