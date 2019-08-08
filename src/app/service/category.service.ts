import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://budgapp.azurewebsites.net/api'

@Injectable()
export class CategoryService {

  constructor(private _http: HttpClient) { }

  getCategory() {
    return this._http.get(`${ApiUrl}/Category`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}
