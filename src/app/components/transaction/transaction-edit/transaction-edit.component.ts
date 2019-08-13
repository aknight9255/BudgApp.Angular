import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/service/transaction.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {
  transaction: Transaction;
  
  editTransactionForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _transactionService: TransactionService,
              private _ar: ActivatedRoute,
              private _router: Router) {
                this._ar.paramMap.subscribe(p => {
                  this._transactionService.getTransaction(p.get('id')).subscribe((singleTransaction: Transaction) => {
                    this.transaction = singleTransaction;
                    this.createForm();
                  });
                });
               }

  ngOnInit() {
  }

  createForm(){
    this.editTransactionForm = this._form.group({
      TransactionID: new FormControl(this.transaction.TransactionID),
      TransactionAmount: new FormControl(this.transaction.TransactionAmount),
      TransactionDate: new FormControl(this.transaction.TransactionDate),
      CategoryID: new FormControl(this.transaction.CategoryID) 
    });
  }

  onSubmit(form){
    const updateTransaction: Transaction = {
      TransactionID: form.value.TransactionID,
      TransactionAmount: form.vaule.TransactionAmount,
      TransactionDate: form.vaule.TransactionDate,
      CategoryID: form.value.CategoryID,
      Category: form.value.Category,
    };
    this._transactionService.updateTransaction(updateTransaction).subscribe(d => {
      this._router.navigate(['/transactions'])
    })
  }

}
