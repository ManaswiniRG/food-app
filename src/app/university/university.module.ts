import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { UniversityComponent } from './university.component';
import { UniversityTableComponent } from './university-table/university-table.component';


@NgModule({
  declarations: [
    UniversityComponent,
    UniversityTableComponent
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule { }
