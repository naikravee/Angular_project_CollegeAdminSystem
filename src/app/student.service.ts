import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IStudent } from './model/student-interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url: string = "/assets/data/students-data.json";

  constructor(private http: HttpClient) { }

  dialogData: any;

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url);
  }

  // getDialogData() {
  //   return this.dialogData;
  // }

  // addNewStudent (newStudent: IStudent): void {
  //   this.dialogData = newStudent;
  // }

  // editStudent (editStudent: IStudent): void {
  //   this.dialogData = editStudent;
  // }

  deleteStudentId (id: number): void {
    console.log(id);
  }

}
