import { Component, OnInit } from '@angular/core';
import { IncomeService } from 'src/app/service/income.service';
import { Income } from 'src/app/models/income';
import { MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-income-index',
  templateUrl: './income-index.component.html',
  styleUrls: ['./income-index.component.css']
})
export class IncomeIndexComponent implements OnInit {

  columnNames = ['IncomeAmount', 'IncomeDate','buttons']
  dataSource: MatTableDataSource<Income>
  constructor(private _incomeService: IncomeService) { }

  ngOnInit() {
    this._incomeService.getIncomes().subscribe((incomes: Income[]) => {
      this.dataSource = new MatTableDataSource<Income>(incomes);
    });
  }

}
