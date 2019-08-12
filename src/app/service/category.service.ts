import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';

const ApiUrl = 'https://budgapp.azurewebsites.net/api'

@Injectable()
export class CategoryService {

  constructor(private _http: HttpClient) { }

  getCategories(): any {
    return this._http.get(`${ApiUrl}/Category`, { headers: this.getHeaders() });
  }
  getCategory(id: string) {
    return this._http.get(`${ApiUrl}/Category/${id}`, { headers: this.getHeaders() });
  }

  createCategory(category: Category){
    return this._http.post(`${ApiUrl}/Category`,category , {headers: this.getHeaders() });
  }

  updateCategory(category: Category){
    return this._http.put(`${ApiUrl}/Category`,category , {headers: this.getHeaders() });
  }

  deleteCategory(id: number) {
    return this._http.delete(`${ApiUrl}/Category/${id}`, { headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}
