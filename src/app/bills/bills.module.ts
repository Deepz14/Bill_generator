import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './bills.component';
import { FuelBillsComponent } from './fuel-bills/fuel-bills.component';

const Routes: Routes = [
  {
    path: '', 
    component: BillsComponent,
    children: [
      {path: 'fuel-bills', component: FuelBillsComponent},
      {path: '', redirectTo: 'fuel-bills', pathMatch: 'full'}
    ]
  },
]

@NgModule({
  declarations: [
    BillsComponent,
    FuelBillsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ]
})
export class BillsModule { }
