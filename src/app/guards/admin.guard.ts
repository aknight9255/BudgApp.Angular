import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Injectable()

export class AdminGuard implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router    
  ) { }

  canActivate(): boolean {
    if (this.auth.isAdmin == false) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
