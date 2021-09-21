import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from './model/department-interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _url: string = "/assets/data/departments-data.json";

  constructor(private http: HttpClient) { }

  dialogData: any;

  getDepartmentsData(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this._url);
  }

  // getDialogData() {
  //   return this.dialogData;
  // }

  // addNewDept(newDept: IDepartment): void {
  //   this.dialogData = newDept;
  // }

  // editDept(editDept: IDepartment): void {
  //   this.dialogData = editDept;
  // }

  deleteDept(id: number): void {
    console.log(id);
  }

}
