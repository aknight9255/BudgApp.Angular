import { Component, OnInit } from '@angular/core';
import {AuthService } from 'src/app/service/auth.service';
import {UserInfo} from 'src/app/models/user-info';
import { MatTableDataSource} from '@angular/material';


@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  columnNames = ['Email','buttons']
  dataSource: MatTableDataSource<UserInfo>

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.getUsers().subscribe((users: UserInfo[]) => {
      this.dataSource = new MatTableDataSource<UserInfo>(users);
    });
    
  }

}
