import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { APIURL } from 'src/environments/environment.prod';

// const Api_Url = 'https://budgapp.azurewebsites.net';

@Injectable()
export class AuthService {

  userInfo: Token;
  isLoggedIn = new Subject<boolean>(); //
  isAdmin: boolean;


  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${APIURL}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    if (loginInfo.email == "admin@admin.admin" && loginInfo.password == "Admin1!") {
      return this._http.post(`${APIURL}/token`, str).subscribe((token: Token) => {
        this.userInfo = token;
        localStorage.setItem('id_token', token.access_token);
        this.isLoggedIn.next(true);
        this.isAdmin = true;
        //console.log("Eyyy lmao");
        this._router.navigate(['/incomes']);
      });
    }
    else {
      return this._http.post(`${APIURL}/token`, str).subscribe( (token: Token) => {
        this.userInfo = token;
        localStorage.setItem('id_token', token.access_token);
        this.isLoggedIn.next(true);
        this.isAdmin = false;
        this._router.navigate(['/incomes']);
      });
    }


  }
  logout(): Observable<Object> {
    localStorage.clear();
    this.isLoggedIn.next(false);
    
    return this._http.post(`${APIURL}/api/Account/Logout`, { headers: this.setHeader() });
  }
  
  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }
  
    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  
    return this._http.get(`${APIURL}/api/Account/UserInfo`, { headers: authHeader });
  
  }
}

// isAuthed(): boolean {
//   const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
//   var ok;
//   this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: authHeader }).subscribe(e => ok = e);
//   if(ok.Email == 'admin@admin.admin') return true;
//   else return false;
// }