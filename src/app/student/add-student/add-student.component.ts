import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IStudent } from 'src/app/model/student-interface';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public students: IStudent[] = [];

  public local_data: any;
  public flag!: string;


  constructor(public dialogRef: MatDialogRef<AddStudentComponent>,
              public _studentService: StudentService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: IStudent,
              private fb: FormBuilder) {
                this.local_data = {...data};
                this.flag = this.local_data.flag;
              }

  ngOnInit(): void {
    this._studentService.getStudents()
      .subscribe(data => this.students = data);
      console.log(this.data);
  }

  // get id () {
  //   return this.addStudentForm.get('id') as FormControl;
  // }

  // get rollNo () {
  //   return this.addStudentForm.get('rollNo') as FormControl;
  // }

  // get class () {
  //   return this.addStudentForm.get('class') as FormControl;
  // }

  // get division () {
  //   return this.addStudentForm.get('division') as FormControl;
  // }

  // get name () {
  //   return this.addStudentForm.get('name') as FormControl;
  // }

  // get apt () {
  //   return this.addStudentForm.get('apt') as FormControl;
  // }

  // get street () {
  //   return this.addStudentForm.get('street') as FormControl;
  // }

  // get city () {
  //   return this.addStudentForm.get('city') as FormControl;
  // }

  get addStudentFormControl () {
    return this.addStudentForm.controls;
  }

  get studentAddressControl () {
    return this.studentAddress.controls;
  }

  studentAddress = this.fb.group ({
    apt: [this.data.student_record.studentAddress?.apt, Validators.required],
    landmark: [this.data.student_record.studentAddress?.landmark, [Validators.required, Validators.pattern('^[a-zA-Z .,\w() -]+$')]],
    city: [this.data.student_record.studentAddress?.city, [Validators.required, Validators.pattern('^[a-zA-Z .,\w() -]+$')]]
  });

  addStudentForm = this.fb.group ({
    studentRegNo: [this.data.student_record.studentRegNo, Validators.required],
    studentRollNo: [this.data.student_record.studentRollNo, Validators.required],
    studentClass: [this.data.student_record.studentClass, Validators.required],
    studentDiv: [this.data.student_record.studentDiv, Validators.required],
    studentName: [this.data.student_record.studentName, Validators.required],
    studentAddress: this.studentAddress
  });

  doAction() {
    this.dialogRef.close({ data: this.addStudentForm.value, event: this.flag});
  }

  // confirmAddStudent(): void {
  //   this._studentService.addNewStudent(this.addStudentForm.value);
  //   // console.log(this.addStudentForm.value);
  // }

  cancelAdd(): void {
    this.dialogRef.close();
  }

  // onSubmit() {
  //   console.log(this.addStudentForm.value);
  // }


}
