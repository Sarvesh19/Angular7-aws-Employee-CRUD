import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

   private baseUrlTemp = 'https://anton-flask.herokuapp.com/';
    //  private baseUrl = 'http://localhost:8084/employees/';
     // Check Me.  
  private baseUrl = 'http://antonboot-env.eba-gi7ikd7y.ap-south-1.elasticbeanstalk.com/employees/';

  constructor(private http:HttpClient) { }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'getAllEmpolyee');
  }

  createStudent(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-employee', student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + 'delete-student/' + id, { responseType: 'text' });
  }

  getStudent(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/student/${id}`);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl} + 'update-student' + /${id}`, value);
  }

  getStudentFromFlask(): Observable<any> {
    return this.http.get(`${this.baseUrlTemp}`+'getUser');
  }

  getItemFromAmazon(item : any): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'item/' + item);
  }

  
}                                           