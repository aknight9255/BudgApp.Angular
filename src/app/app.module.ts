import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import {
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
} from '@angular/material';

import { MatDividerModule } from '@angular/material/divider';

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
import { Cards } from './components/income/cards/cards.component';
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
import { ChartComponent } from './components/category/chart/chart.component';


const routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'incomes', children: [
      {path: '', component: IncomeIndexComponent },
      {path: 'create', component: IncomeCreateComponent},
      {path: 'edit/:id', component: IncomeEditComponent},
      {path: 'delete/:id', component: IncomeDeleteComponent},
    ]
  },
  {path: 'category', children: [
    {path: '', component: CategoryIndexComponent},
    {path: 'create', component: CategoryCreateComponent},
    {path: 'edit/:id', component: CategoryEditComponent},
    {path: 'delete/:id', component: CategoryDeleteComponent},
  ]
},
{
  path: 'transactions', children: [
    {path: '', component: TransactionIndexComponent },
    {path: 'create', component: TransactionCreateComponent},
    {path: 'edit/:id', component: TransactionEditComponent},
    {path: 'delete/:id', component: TransactionDeleteComponent},
  ]
},

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
    Cards,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryEditComponent,
    CategoryIndexComponent,
    TransactionCreateComponent,
    TransactionDeleteComponent,
    TransactionEditComponent,
    TransactionIndexComponent,
    ChartComponent,
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
    MatSelectModule,
    AppRoutingModule,
    MatDividerModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    ChartsModule,
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
