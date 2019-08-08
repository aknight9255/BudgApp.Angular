import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../../../service/income.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-create',
  templateUrl: './income-create.component.html',
  styleUrls: ['./income-create.component.css']
})
export class IncomeCreateComponent implements OnInit {
  incomeForm: FormGroup;

  constructor(private _incomeService: IncomeService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.incomeForm = this._form.group({
      IncomeAmount: new FormControl,
      IncomeDate: new FormControl
    });
  }
  
  onSubmit() {
      this._incomeService.createIncome(this.incomeForm.value).subscribe(data => {
        this._router.navigate(['/incomes']);
      });
    }
}
