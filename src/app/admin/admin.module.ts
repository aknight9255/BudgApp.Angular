import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

//import { AdminDashboardComponent }  from './admin-dashboard/admin-dashboard.component';
import { ManageIncomeComponent }    from './manage-income/manage-income.component';
import { ManageTransactionsComponent }    from './manage-transactions/manage-transactions.component';

import { AdminRoutingModule }       from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [    
    // AdminDashboardComponent,
    ManageIncomeComponent,
    ManageTransactionsComponent
  ]
})
export class AdminModule {}