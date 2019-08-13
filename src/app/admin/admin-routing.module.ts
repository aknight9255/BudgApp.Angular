import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageIncomeComponent } from './manage-income/manage-income.component';
import { ManageTransactionsComponent } from './manage-transactions/manage-transactions.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'crises', component: ManageIncomeComponent },
          { path: 'heroes', component: ManageTransactionsComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
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
