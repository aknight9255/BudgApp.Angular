import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserInfo } from 'src/app/models/user-info';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  userInfo: any = {};

  constructor(private _ar: ActivatedRoute, private _router: Router, private _authService: AuthService) {
    this._ar.paramMap.subscribe(p => {
      this._authService.getOneUser(p.get('id')).subscribe((singleUser: UserInfo) => {
        this.userInfo = singleUser;
        console.log(singleUser);
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._ar.paramMap.subscribe(p => {
      this._authService.deleteUser(p.get('id')).subscribe((singleUser: UserInfo) => {
        this._router.navigate(['/admin-dashboard']);
      });
    })
  }
}
