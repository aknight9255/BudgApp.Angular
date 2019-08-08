import { Component, OnInit } from '@angular/core';
import {Income } from 'src/app/models/income';
import {FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { IncomeService } from 'src/app/service/income.service';

@Component({
  selector: 'app-income-edit',
  templateUrl: './income-edit.component.html',
  styleUrls: ['./income-edit.component.css']
})
export class IncomeEditComponent implements OnInit {
  income: Income;

  editIncomeForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _incomeService: IncomeService,
              private _ar: ActivatedRoute,
              private _router: Router) { 
        this._ar.paramMap.subscribe(p => {
          this._incomeService.getIncome(p.get('id')).subscribe((singleIncome: Income) => {
            this.income = singleIncome;
            this.createForm();
          });
        });
              }

  ngOnInit() {
  }

  createForm(){
    this.editIncomeForm = this._form.group({
      IncomeID: new FormControl(this.income.IncomeID),
      IncomeAmount: new FormControl(this.income.IncomeAmount),
      IncomeDate: new FormControl(this.income.IncomeDate)
    });
  }

  onSubmit(form){
    const updateIncome: Income = {
      IncomeID: form.value.IncomeID,
      IncomeAmount: form.value.IncomeAmount,
      IncomeDate: form.value.IncomeDate,
    };
    this._incomeService.updateIncome(updateIncome).subscribe(d => {
      this._router.navigate(['/incomes']);
    })
  }

}
