import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
} from '@angular/material';

import { MatDividerModule } from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';

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

import { AuthGuard } from './guards/auth.guard';
import { CategoryService } from './service/category.service';
import { IncomeService } from './service/income.service';
import { TransactionService } from './service/transaction.service';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminModule } from './admin/admin.module';
import { ChartComponent } from './components/category/chart/chart.component';

import { AdminGuard } from './guards/admin.guard';

import { HistoryComponent } from './components/history/history.component';
import { AboutComponent } from './components/about/about.component';

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
    AdminDashboardComponent,
    ChartComponent,
    HistoryComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatTooltipModule,
    AppRoutingModule,
    MatDividerModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    AdminModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    ChartsModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  providers: [
    AuthService,
    CategoryService,
    IncomeService,
    TransactionService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
