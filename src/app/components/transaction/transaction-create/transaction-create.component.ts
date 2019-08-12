import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import {FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  transactionForm: FormGroup;
  category = [];

  constructor(private _transactionService: TransactionService,private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.transactionForm = this._form.group({
      CategoryID: new FormControl,
      Category: new FormControl,
      TransactionAmount: new FormControl,
      TransactionDate: new FormControl,
    });
  }

  onSubmit(){
    this._transactionService.createTransaction(this.transactionForm.value).subscribe(data => {
      this._router.navigate(['/transactions'])
    })
  }

}
