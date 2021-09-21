import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IStudent } from 'src/app/model/student-interface';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  public students: IStudent[] = [];

  constructor(public dialogRef: MatDialogRef<DeleteStudentComponent>,
              public _studentService: StudentService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this._studentService.getStudents()
      .subscribe(data => this.students = data);
  }

  confirmDeleteStudent(): void {
    this._studentService.deleteStudentId(this.data.id);
  }

  cancelDel(): void {
    this.dialogRef.close();
  }

}
