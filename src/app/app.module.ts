import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
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
import { Auth } from './guards/auth.guard/auth.guard.component';
import { Auth } from './service/auth.service/auth.service.component';
import { Income } from './service/income.service/income.service.component';
import { Category } from './service/category.service/category.service.component';
import { Transaction } from './service/transaction.service/transaction.service.component';
import { RegisterUserComponent } from './models/register-user/register-user.component';
import { TokenComponent } from './models/token/token.component';
import { UserInfoComponent } from './models/user-info/user-info.component';
import { IncomeComponent } from './models/income/income.component';
import { CategoryComponent } from './models/category/category.component';
import { TransactionComponent } from './models/transaction/transaction.component';

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
    Auth.GuardComponent,
    Auth.ServiceComponent,
    Income.ServiceComponent,
    Category.ServiceComponent,
    Transaction.ServiceComponent,
    RegisterUserComponent,
    TokenComponent,
    UserInfoComponent,
    IncomeComponent,
    CategoryComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
