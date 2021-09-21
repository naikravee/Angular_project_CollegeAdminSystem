import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { DepartmentComponent } from './department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { EditDeptComponent } from './edit-dept/edit-dept.component';
import { DeleteDeptComponent } from './delete-dept/delete-dept.component';



@NgModule({
  declarations: [
    DepartmentComponent,
    AddDeptComponent,
    EditDeptComponent,
    DeleteDeptComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DepartmentModule { }
