import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/service/transaction.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {
  transaction: Transaction;
  categories: Category[] = [];

  editTransactionForm: FormGroup;
  constructor(private _form: FormBuilder,
    private _transactionService: TransactionService,
    private _ar: ActivatedRoute,
    private _router: Router,
    private _categoryService: CategoryService) {
    this._ar.paramMap.subscribe(p => {
      this._transactionService.getTransaction(p.get('id')).subscribe((singleTransaction: Transaction) => {
        this.transaction = singleTransaction;
        this.createForm();
      });
    });
  }

  ngOnInit() {
    this._categoryService.getCategories().subscribe(e => {
      for (let i = 0; i < e.length; i++) {
        this.categories.push(e[i]);
      }
      console.log(this.categories);
    });
  }

  createForm() {
    this.editTransactionForm = this._form.group({
      TransactionID: new FormControl(this.transaction.TransactionID),
      TransactionAmount: new FormControl(this.transaction.TransactionAmount),
      TransactionDate: new FormControl(this.transaction.TransactionDate),
      CategoryID: new FormControl(this.transaction.CategoryID)
    });
  }

  onSubmit(form) {
    const updateTransaction: Transaction = {
      TransactionID: form.value.TransactionID,
      TransactionAmount: form.value.TransactionAmount,
      TransactionDate: form.value.TransactionDate,
      CategoryID: form.value.CategoryID,
      Category: form.value.Category,
    };
    this._transactionService.updateTransaction(updateTransaction).subscribe(d => {
      this._router.navigate(['/transactions'])
    })
  }

}
