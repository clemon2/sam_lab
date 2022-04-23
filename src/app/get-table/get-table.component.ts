import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; //表格套件
import { ApiService}from'src/api/api.service'; //api-server
import { MatPaginator, MatPaginatorIntl, PageEvent, } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-get-table',
  templateUrl: './get-table.component.html',
  styleUrls: ['./get-table.component.scss']
})
export class GetTableComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private HttpApi: ApiService,) { }
  PDataSource = new MatTableDataSource();
  Col=['code','type','p_name'] //欄位
  PData:any//接資料的表格變數


  ngOnInit(): void {
    this.getAllProject()
  }
  totalCount:any;
  getAllProject(): void {
    this.HttpApi.getProjectRequest(1,10)
    .subscribe(Request => {
        this.PData = Request.body.project
        console.log(this.PData)
        console.log(Request.boby.total)
        this.totalCount=Request.boby.total
        console.log(this.totalCount)
        this.showData(this.PDataSource,this.PData)
    })
}

// 顯示資料
showData(dataSource:any,data: any) {
    dataSource.data = data;//將資料帶入
    dataSource.sort = this.sort;
    dataSource.paginator = this.paginator;
}

}
