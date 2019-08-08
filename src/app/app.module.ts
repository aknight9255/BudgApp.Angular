import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import {
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './service/auth.service';
import { FooterComponent } from './components/footer/footer.component';
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

import {AuthGuard } from './guards/auth.guard';
import { CategoryService} from './service/category.service';
import { IncomeService} from './service/income.service';
import { TransactionService } from './service/transaction.service';


const routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'incomes', children: [
      {path: '', component: IncomeIndexComponent },
      {path: 'create', component: IncomeCreateComponent},
      {path: 'edit', component: IncomeEditComponent},
    ]
  },
  {path: 'category', component: CategoryIndexComponent},
  {path: '**', component: RegistrationComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    IncomeCreateComponent,
    IncomeDeleteComponent,
    IncomeEditComponent,
    IncomeIndexComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryEditComponent,
    CategoryIndexComponent,
    TransactionCreateComponent,
    TransactionDeleteComponent,
    TransactionEditComponent,
    TransactionIndexComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    AppRoutingModule,
    MatDividerModule,
    MatTableModule,
  ],
  providers: [
    AuthService,
    CategoryService,
    IncomeService,
    TransactionService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
