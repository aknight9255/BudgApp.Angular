import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Income } from '../models/income';

const Api_Url = 'https://budgapp.azurewebsites.net/api';

@Injectable()
export class IncomeService {

  constructor(private _http: HttpClient) { }
getIncomes (){
  return this._http.get(`${Api_Url}/Income`, {headers: this.getHeaders() });
}

createIncome(income: Income){
  return this._http.post(`${Api_Url}/Income`, income, {headers: this.getHeaders()});
}


private getHeaders(){
  return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
