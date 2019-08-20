import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';


const adminRoutes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'deleteUser/:id', component: UserDeleteComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
