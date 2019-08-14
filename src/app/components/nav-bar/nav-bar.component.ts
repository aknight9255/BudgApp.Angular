import { Component, OnInit } from '@angular/core';
import { AdminGuard } from '../../guards/admin.guard';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  IsAdmin: boolean;
  constructor(private auth: AdminGuard) { }

  ngOnInit() {
    if(this.auth.canActivate() == true){
      this.IsAdmin=true;

     }
     else{
       this.IsAdmin=false;
     }
  }

}
