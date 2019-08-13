import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const Api_Url = 'https://budgapp.azurewebsites.net';

@Injectable()
export class AuthService {

  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
  isAdmin = new Subject<boolean>();


  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    if (loginInfo.email == "admin@admin.admin" && loginInfo.password == "Admin1!")
    {
      return this._http.post(`${Api_Url}/token`, str).subscribe( (token: Token) => {
        this.userInfo = token;
        localStorage.setItem('id_token', token.access_token);
        this. isLoggedIn.next(true);
        this.isAdmin.next(true);
        console.log("Eyyy lmao");
        this._router.navigate(['/incomes']);
      });
    }
    else 
    {
      return this._http.post(`${Api_Url}/token`, str).subscribe( (token: Token) => {
        this.userInfo = token;
        localStorage.setItem('id_token', token.access_token);
        this. isLoggedIn.next(true);
        this.isAdmin.next(false);
        this._router.navigate(['/incomes']);
      });
    }

    
  }
  currentUser(): Observable<Object> {
    if (!localStorage.getItem('if_token')) {return new Observable(observer => observer.next(false)); }
    
    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

    return this ._http.get(`${Api_Url}/api/Accpunt/UserInfo`, {headers: authHeader});
    
  }
  logout(): Observable<Object> {
    localStorage.clear();
    this.isLoggedIn.next(false);

return this._http.post(`${Api_Url}/api/Account/Logout`, {headers: this.setHeader() } );
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
