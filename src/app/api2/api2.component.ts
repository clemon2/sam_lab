import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; //表格套件
import { ApiService}from'src/api/api.service'; //api-server

@Component({
  selector: 'app-api2',
  templateUrl: './api2.component.html',
  styleUrls: ['./api2.component.scss']
})
export class Api2Component implements OnInit {

  constructor(private HttpApi: Api2Service,) { }

  ngOnInit(): void {
    this.getAPIRequest()
    this.postAPIRequest()
    this.patchAPIRequest()
    this.deleteAPIRequest()
  }
  //取得User資料
  getAPIRequest(): void {
    let id = 1
    this.HttpApi.getAPIRequest(id)
      .subscribe(Request => {
        console.log(Request)
      })
  }

  //新增User資料
  postAPIRequest(): void {
    let body = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    this.HttpApi.postAPIRequest(body)
      .subscribe(Request => {
        console.log(Request)
      })
  }

  //修改User資料
  patchAPIRequest(): void {
    let id = 1
    let body = {
      title: 'fooooooooooo'
    }
    this.HttpApi.patchAPIRequest(id, body)
      .subscribe(Request => {
        console.log(Request)
      })
  }

  //刪除User資料
  deleteAPIRequest(): void {
    let id = 1
    this.HttpApi.deleteAPIRequest(id)
      .subscribe(Request => {
        console.log(Request)
      })
  }

}
