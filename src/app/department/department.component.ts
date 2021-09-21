import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DepartmentService } from '../department.service';
import { IDepartment } from '../model/department-interface';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { DeleteDeptComponent } from './delete-dept/delete-dept.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public departments: IDepartment[] = [];

  displayedColumns = ['id', 'name', 'tName', 'tQualf', 'tDesg', 'tYears', 'star'];

  @ViewChild(MatTable) table!: MatTable<IDepartment>;


  constructor(public _deptService: DepartmentService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this._deptService.getDepartmentsData()
      .subscribe(data => this.departments = data);
  }

  addDeptRecord(dept_record: any, flag: string) {
   let data = {
    dept_record: dept_record,
    flag: flag
   }
    const dialogRef = this.dialog.open(AddDeptComponent, {data: data});

    dialogRef.afterClosed().subscribe(result => {
      const foundIndex = this.departments.indexOf(dept_record);
      if(result.event == 'Add'){
        this.addDept(result.data);
      } else if(result.event == 'Edit'){
        this.editDept(result.data, foundIndex);
      }
    });
  }

  addDept(add_dept_data: any) {
    this.departments.push(add_dept_data);
    this.table.renderRows();
  }

  editDept(edit_dept_data: any, foundIndex: number) {
    this.departments[foundIndex] = edit_dept_data;
    this.table.renderRows();
  }

  deleteDeptRecord(del_dept: any) {
    const dialogRef = this.dialog.open(DeleteDeptComponent, {data: {dept: del_dept}});

    dialogRef.afterClosed().subscribe(result => {
      if(result === 1){
        // console.log(del_dept);
        const foundIndex = this.departments.indexOf(del_dept);
        // console.log(foundIndex);
        this.departments.splice(foundIndex, 1);
      }
      this.table.renderRows();
    });
  }


  

}
