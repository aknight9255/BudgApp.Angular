import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../models/transaction';
const Api_Url = 'https://budgapp.azurewebsites.net/api';

@Injectable()
export class TransactionService {

  constructor(private _http: HttpClient) { }

  getTransactions(){
    return this._http.get(`${Api_Url}/Transaction`, {headers: this.getHeaders()});
  }
  
  getTransaction(id: string){
    return this._http.get(`${Api_Url}/Transaction/${id}`, { headers: this.getHeaders() });
  }

  getTransactionByMonth(coolDate: string){
    return this._http.get(`${Api_Url}/Transaction?coolDate=${coolDate}`, { headers: this.getHeaders() });
  }

  createTransaction(transaction: Transaction){
    return this._http.post(`${Api_Url}/Transaction`,transaction, { headers: this.getHeaders()});
  }

  updateTransaction(transaction: Transaction){
    return this._http.put(`${Api_Url}/Transaction`,transaction, { headers: this.getHeaders()});
  }

  pullBalance(monthKey: string){
    return this._http.get(`${Api_Url}/Transaction/GetBalance?monthKey=${monthKey}`, { headers: this.getHeaders() });

  }

  pullChartData(): any{
    return this._http.get(`${Api_Url}/Transaction/GetChartData`, { headers: this.getHeaders() });

  }

  deleteTransaction(id: number){
    return this._http.delete(`${Api_Url}/Transaction/${id}`, {headers: this.getHeaders() });

  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
