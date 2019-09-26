import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
export interface User {
  med: string;
  mycode: string;
}
const CodeObject = {
  votretexte: '',
};
@Injectable()
export class TextSearchService {
  baseURL = 'https://www.aksantimed.com/sms/remotepharma.cfc?';
  HttpClient: any;
  constructor(
    private http: HttpClient) { }
  getCode(med): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'method=' + 'findmedAngular' + '&med=' + med);
  }
}

