import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): Observable<boolean> {
      return new Observable<boolean> ((observer) => {
          if (!localStorage.getItem('id_token')) {
              this.router.navigate(['/login']);
              return observer.next(false);
          } else {
              return observer.next(true);
          }
      });
  }
}