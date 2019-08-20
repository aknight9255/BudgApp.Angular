import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';


import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { IncomeCreateComponent } from './components/income/income-create/income-create.component';
import { IncomeDeleteComponent } from './components/income/income-delete/income-delete.component';
import { IncomeEditComponent } from './components/income/income-edit/income-edit.component';
import { IncomeIndexComponent } from './components/income/income-index/income-index.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { CategoryIndexComponent } from './components/category/category-index/category-index.component';
import { TransactionCreateComponent } from './components/transaction/transaction-create/transaction-create.component';
import { TransactionDeleteComponent } from './components/transaction/transaction-delete/transaction-delete.component';
import { TransactionEditComponent } from './components/transaction/transaction-edit/transaction-edit.component';
import { TransactionIndexComponent } from './components/transaction/transaction-index/transaction-index.component';
import { HistoryComponent } from './components/history/history.component';
import { AboutComponent } from './components/about/about.component';
import { UserDeleteComponent } from './admin/user-delete/user-delete.component';



const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: AboutComponent },


  {
    path: 'incomes', children: [
      { path: '', component: IncomeIndexComponent },
      { path: 'create', component: IncomeCreateComponent },
      { path: 'edit/:id', component: IncomeEditComponent },
      { path: 'delete/:id', component: IncomeDeleteComponent },
    ]
  },

  {
    path: 'category', children: [
      { path: '', component: CategoryIndexComponent },
      { path: 'create', component: CategoryCreateComponent },
      { path: 'edit/:id', component: CategoryEditComponent },
      { path: 'delete/:id', component: CategoryDeleteComponent },
    ]
  },

  {
    path: 'transactions', children: [
      { path: 'create', component: TransactionCreateComponent },
      { path: 'edit/:id', component: TransactionEditComponent },
      { path: 'delete/:id', component: TransactionDeleteComponent },
      { path: '', component: TransactionIndexComponent },
    ]
  },

  {
    path: '', children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard] },
      { path: 'deleteUser/:id', component: UserDeleteComponent, canActivate: [AdminGuard] },
    ]
  },

  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AdminGuard
  ]
})
export class AppRoutingModule { }
