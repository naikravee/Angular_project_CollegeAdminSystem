import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { IDepartment } from '../model/department-interface';
import { IStudent } from '../model/student-interface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public departments: IDepartment[] = [];
  public students: IStudent[] = [];

  constructor(public _deptService: DepartmentService,
              public _studentService: StudentService) { }

  ngOnInit(): void {
    this._deptService.getDepartmentsData().subscribe(dept_data => this.departments = dept_data);
    this._studentService.getStudents().subscribe(student_data => this.students = student_data);
  }

  studentscount: number = 0;

  studentscountStop: any = setInterval( ()=> {
    this.studentscount++;
    if(this.studentscount == this.students.length){
      clearInterval(this.studentscountStop);
    }
  }, 100);

  departmentscount: number = 0;

  departmentscountStop: any = setInterval( ()=> {
    this.departmentscount++;
    if(this.departmentscount == this.departments.length){
      clearInterval(this.departmentscountStop);
    }
  }, 100);


}
