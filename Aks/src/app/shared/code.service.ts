import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
export interface User {
  code: string;
  mycode: string;
}
const CodeObject = {
  votrecode: '',
};
@Injectable()
export class UserService {
  baseURL = 'https://www.aksantimed.com/sms/remotepharma.cfc?';
  HttpClient: any;
  constructor(
    private http: HttpClient) { }
  getCode(code): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'method=' + 'choosepharmaAngular' + '&medcode=' + code);
  }
}
