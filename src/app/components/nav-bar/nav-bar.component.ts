import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  username: string;
  isLoggedIn: boolean;

  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((loggedInUserStatus: boolean) =>{
      console.log(loggedInUserStatus);
      this.isLoggedIn = loggedInUserStatus;
  });
}
onLoggout() {
  this.authService.logout();
  this.isLoggedIn = false;
  this._router.navigate(['/login']);
}

}
export interface UserData  {
  user: string;
  isloggedin: boolean;
}