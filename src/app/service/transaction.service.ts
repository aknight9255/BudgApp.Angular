import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../models/transaction';
import { APIURL } from 'src/environments/environment.prod';

// const Api_Url = 'https://budgapp.azurewebsites.net/api';

@Injectable()
export class TransactionService {

  constructor(private _http: HttpClient) { }

  getTransactions(){
    return this._http.get(`${APIURL}api/Transaction`, {headers: this.getHeaders()});
  }
  
  getTransaction(id: string){
    return this._http.get(`${APIURL}api/Transaction/${id}`, { headers: this.getHeaders() });
  }

  getTransactionByMonth(coolDate: string){
    return this._http.get(`${APIURL}api/Transaction?coolDate=${coolDate}`, { headers: this.getHeaders() });
  }

  createTransaction(transaction: Transaction){
    return this._http.post(`${APIURL}api/Transaction`,transaction, { headers: this.getHeaders()});
  }

  updateTransaction(transaction: Transaction){
    return this._http.put(`${APIURL}api/Transaction`,transaction, { headers: this.getHeaders()});
  }

  pullBalance(monthKey: string){
    return this._http.get(`${APIURL}api/Transaction/GetBalance?monthKey=${monthKey}`, { headers: this.getHeaders() });

  }

  pullChartData(): any{
    return this._http.get(`${APIURL}/api/Transaction/GetChartData`, { headers: this.getHeaders() });

  }

  deleteTransaction(id: number){
    return this._http.delete(`${APIURL}/api/Transaction/${id}`, {headers: this.getHeaders() });

  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
