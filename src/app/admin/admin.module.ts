import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

//import { AdminDashboardComponent }  from './admin-dashboard/admin-dashboard.component';

import { AdminRoutingModule }       from './admin-routing.module';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [    
    // AdminDashboardComponent,
  UserDeleteComponent]
})
export class AdminModule {}