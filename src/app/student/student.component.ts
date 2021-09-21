import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { IStudent } from '../model/student-interface';
import { StudentService } from '../student.service';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students: IStudent[] = [];


  displayedColumns =
  ['id', 'rollno', 'name', 'class', 'div', 'apt', 'landmark', 'city', 'star'];

  @ViewChild(MatTable) table!: MatTable<IStudent>;

  constructor(public _studentService: StudentService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this._studentService.getStudents()
      .subscribe(data => this.students = data);
  }

  addStudentRecord(student_record: any, flag: string) {
    let data = {
      student_record: student_record,
      flag: flag
    }
    const dialogRef = this.dialog.open(AddStudentComponent, {data: data});

    dialogRef.afterClosed().subscribe(result => {
      const foundIndex = this.students.indexOf(student_record);
      if(result.event == 'Add') { 
        this.addStudent(result.data);
      }else if(result.event == 'Edit') {
        this.editStudent(result.data, foundIndex);
      }
    });
  }

  addStudent(add_stud_data: any) {
    this.students.push(add_stud_data);
    console.log(this.students);
    this.table.renderRows();
  }

  editStudent(edit_stud_data: any, foundIndex: number) {
    this.students[foundIndex] = edit_stud_data;
    this.table.renderRows();
  }

  deleteStudentRecord(del_Student: any) {
    const dialogRef = this.dialog.open(DeleteStudentComponent, {data: {student: del_Student}});

    dialogRef.afterClosed().subscribe(result => {
      if(result === 1){
        const foundIndex = this.students.indexOf(del_Student);
        //console.log(foundIndex);
        this.students.splice(foundIndex, 1);
      }
      this.table.renderRows();
    });
  }

}
