import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/department.service';
import { IDepartment } from 'src/app/model/department-interface';

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.css']
})
export class AddDeptComponent implements OnInit {

  public departments: IDepartment[] = [];

  public local_data: any;
  public flag!: string;

  constructor(public dialogRef: MatDialogRef<AddDeptComponent>,
              public _deptService: DepartmentService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: IDepartment,
              private fb: FormBuilder) { 
                this.local_data = {...data};
                this.flag = this.local_data.flag;
              }

  ngOnInit(): void { 
    this._deptService.getDepartmentsData().subscribe(data => this.departments = data);
    // console.log(this.data);
  }

  get addDeptFormControl() {
    return this.addDeptForm.controls;
  }

  get deptTeacherDetailsControl() {
    return this.deptTeacherDetails.controls;
  }

  deptTeacherDetails = this.fb.group({
    teacherName: [this.data.dept_record.deptTeacherDetails?.teacherName, [Validators.required, Validators.pattern('^[a-zA-Z .,\w() -]+$')]],
    qualification: [this.data.dept_record.deptTeacherDetails?.qualification, [Validators.required, Validators.pattern('^[a-zA-Z .,\w() -]+$')]],
    designation: [this.data.dept_record.deptTeacherDetails?.designation,[Validators.required, Validators.pattern('^[a-zA-Z .,\w() -]+$')]],
    yearsOfExp: [this.data.dept_record.deptTeacherDetails?.yearsOfExp, Validators.required]
  })

  addDeptForm = this.fb.group ({
    deptId: [this.data.dept_record.deptId, Validators.required],
    deptName: [this.data.dept_record.deptName, [Validators.required, Validators.pattern('^[a-zA-Z .,\w() -]+$')]],
    deptTeacherDetails: this.deptTeacherDetails
  })

  doAction() {
    this.dialogRef.close({ data: this.addDeptForm.value, event: this.flag});
  }

  cancelAdd(): void {
    this.dialogRef.close({event: 'Cancel'});
  }

}
