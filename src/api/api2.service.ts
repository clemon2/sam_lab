import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; //http協定
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';// RxJS 可觀察物件和運算子

@Injectable({
  providedIn: 'root'
})
export class Api2Service {
  private BaseUrl: string = 'https://jsonplaceholder.typicode.com';//伺服器固定網址

  constructor( private http: HttpClient) { }
  //取得User資料
  getAPIRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/posts/${id}`;
    return this.http.get(url);
  }
      //新增User資料
  postAPIRequest(body: any): Observable<any> {
    const url = `${this.BaseUrl}/posts`;
    return this.http.post(url, body);
  }
    //修改User資料
  patchAPIRequest(id: any, body: any): Observable<any> {
      const url = `${this.BaseUrl}/posts/${id}`;
      return this.http.patch(url, body);
    }

     //刪除User資料
  deleteAPIRequest(id: any): Observable<any> {
    const url = `${this.BaseUrl}/posts/${id}`;
    return this.http.delete(url);
  }



}
