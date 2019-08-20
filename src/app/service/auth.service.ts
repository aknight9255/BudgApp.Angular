import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { APIURL } from 'src/environments/environment.prod';
import { UserInfo } from '../models/user-info';

// const Api_Url = 'https://budgapp.azurewebsites.net';

@Injectable()
export class AuthService {

  userInfo: Token;
  isLoggedIn: boolean = true;
  public isAdmin: boolean;
  public role: UserInfo;


  constructor(private _http: HttpClient, private _router: Router) {
    if(!localStorage.getItem("id_token")) {
      this.isLoggedIn = false;
    }
  }

  register(regUserData: RegisterUser) {
    return this._http.post(`${APIURL}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this._http.post(`${APIURL}/token`, str).subscribe((token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn = true;
      this.currentUser();
      this._router.navigate(['/incomes']); 
    });


    // if (loginInfo.email == "admin@admin.admin" && loginInfo.password == "Admin1!") {
    //   return this._http.post(`${APIURL}/token`, str).subscribe((token: Token) => {
    //     this.userInfo = token;
    //     localStorage.setItem('id_token', token.access_token);
    //     // this.isLoggedIn.next(true);
    //     this.isLoggedIn = true;
    //     this.isAdmin = true;
    //     //console.log("Eyyy lmao");
    //     this._router.navigate(['/incomes']);
    //   });
    // }
    // else {
    //   return this._http.post(`${APIURL}/token`, str).subscribe((token: Token) => {
    //     this.userInfo = token;
    //     localStorage.setItem('id_token', token.access_token);
    //     // this.isLoggedIn.next(true);
    //     this.isLoggedIn = true;
    //     this.isAdmin = false;
    //     this._router.navigate(['/incomes']);
    //   });
    // }
  }

  logout(): Observable<Object> {
    localStorage.clear();
    // this.isLoggedIn.next(false);
    this.isLoggedIn = false;

    return this._http.post(`${APIURL}/api/Account/Logout`, { headers: this.setHeader() });
  }

  
  currentUser() {
    this._http.get(`${APIURL}/api/Account/UserInfo`, { headers: this.setHeader() }).subscribe((userRole: UserInfo) => {
      localStorage.setItem('role', userRole.Role);
      this.adminUser();
      console.log(userRole)
    })
  }
  // currentUser(): Observable<Object> {
    // if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    // const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    
    // return this._http.get(`${APIURL}/api/Account/UserInfo`, { headers: authHeader });

    // }
    
    adminUser() {
      if (localStorage.getItem('role') == 'Admin') {
        this.isAdmin = true;
      } 
      else { 
        this.isAdmin = false;
      }
    }
    
    refreshPage() {
      window.location.reload();
    }

    getUsers(){
      return this._http.get(`${APIURL}/api/Account/AllUsers`, { headers: this.setHeader() });
    }
 
  
  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

 }