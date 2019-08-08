import { Component, OnInit } from '@angular/core';
import { IncomeService } from 'src/app/service/income.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Income } from 'src/app/models/income';

@Component({
  selector: 'app-income-delete',
  templateUrl: './income-delete.component.html',
  styleUrls: ['./income-delete.component.css']
})
export class IncomeDeleteComponent implements OnInit {
  income: Income;

  constructor(private _incomeService: IncomeService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._incomeService.getIncome(p.get('id')).subscribe((singleIncome: Income) => {
        this.income = singleIncome;
      });
    });
   }


  ngOnInit() {
  }

  onDelete(){
    this._incomeService.deleteIncome(this.income.IncomeID).subscribe(()=> {
      this._router.navigate(['/incomes']);
    });
  }

}
