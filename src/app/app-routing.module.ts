// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerSummaryComponent } from './customer-summary/customer-summary.component';
const routes: Routes = [
  { path: '', redirectTo: '/search-customer', pathMatch: 'full' },
  { path: 'search-customer', component: CustomerSearchComponent },
  { path: 'summary', component: CustomerSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
