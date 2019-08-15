import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Income } from '../models/income';
import { APIURL } from 'src/environments/environment.prod';

// const Api_Url = 'https://budgapp.azurewebsites.net/api';

@Injectable()
export class IncomeService {

  constructor(private _http: HttpClient) { }
getIncomes (){
  return this._http.get(`${APIURL}/api/Income`, {headers: this.getHeaders() });
}

createIncome(income: Income){
  return this._http.post(`${APIURL}/api/Income`, income, {headers: this.getHeaders() });
}

getIncome(id: string) {
  return this._http.get(`${APIURL}/api/Income/${id}`, { headers: this.getHeaders() });
}

updateIncome(income: Income) {
  return this._http.put(`${APIURL}/api/Income`, income, { headers: this.getHeaders() });
}

deleteIncome(id: number){
  return this._http.delete(`${APIURL}/api/Income/${id}`, { headers: this.getHeaders() });
}
private getHeaders(){
  return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
