import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import {FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  transactionForm: FormGroup;
  categories: Category[]=[];



  constructor(private _transactionService: TransactionService,private _form: FormBuilder, private _router: Router, private _categoryService: CategoryService) {
    this.createForm();
   }



  ngOnInit() {
    this._categoryService.getCategories().subscribe(e => {
      for(let i = 0; i< e.length; i++){
        this.categories.push(e[i]);
      }
      console.log(this.categories);
    });
  }


  createForm(){
    this.transactionForm = this._form.group({
      TransactionAmount: new FormControl,
      TransactionDate: new FormControl,
      CategoryID: new FormControl,
    });
  }

  onSubmit(){
    this._transactionService.createTransaction(this.transactionForm.value).subscribe(data => {
      this._router.navigate(['/transactions'])
    });
  }

}


