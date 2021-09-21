import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/department.service';
import { IDepartment } from 'src/app/model/department-interface';

@Component({
  selector: 'app-delete-dept',
  templateUrl: './delete-dept.component.html',
  styleUrls: ['./delete-dept.component.css']
})
export class DeleteDeptComponent implements OnInit {

  public departments: IDepartment[] = [];

  constructor(public dialogRef: MatDialogRef<DeleteDeptComponent>,
              public _deptService: DepartmentService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this._deptService.getDepartmentsData()
      .subscribe(data => this.departments = data);
  }

  confirmDelDept(): void {
    this._deptService.deleteDept(this.data.id);
  }

  cancelDel(): void {
    this.dialogRef.close();
  }

}
