import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IStudent } from 'src/app/model/student-interface';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  public students: IStudent[] = [];

  constructor(public dialogRef: MatDialogRef<EditStudentComponent>,
              public _studentService: StudentService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this._studentService.getStudents()
      .subscribe(data => this.students = data);
  }


  get editStudentFormControl () {
    return this.editStudentForm.controls;
  }

  editStudentForm = this.fb.group ({
    studentRegNo: [this.data.student.studentRegNo, Validators.required],
    studentRollNo: [this.data.student.studentRollNo, Validators.required],
    studentClass: [this.data.student.studentClass, Validators.required],
    studentDiv: [this.data.student.studentDiv, Validators.required],
    studentName: [this.data.student.studentName, Validators.required],
    studentAddress: this.fb.group ({
      apt: [this.data.student.studentAddress.apt, Validators.required],
      landmark: [this.data.student.studentAddress.landmark, Validators.required],
      city: [this.data.student.studentAddress.city, Validators.required]
    })
  });

  // confirmEditStudent(): void {
  //   this._studentService.editStudent(this.editStudentForm.value);
  // }

  cancelEdit(): void {
    this.dialogRef.close();
  }
  


}
