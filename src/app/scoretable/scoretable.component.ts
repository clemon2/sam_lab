import {Component, ViewChild,OnInit, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-scoretable',
  templateUrl: './scoretable.component.html',
  styleUrls: ['./scoretable.component.scss']
})
export class ScoretableComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'height'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  height: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jerry', weight: 76, height: 182},
  {position: 2, name: 'Bob', weight: 64,height: 230},
  {position: 3, name: 'Kevin', weight: 65, height: 156},
  {position: 4, name: 'Berry', weight: 59, height: 120},
  {position: 5, name: 'Brandon', weight: 84, height: 156},
  {position: 6, name: 'howqrd', weight: 120, height: 175},
  {position: 7, name: 'Curry', weight: 94, height: 164},
  {position: 8, name: 'Rusel', weight: 85, height: 134},
  {position: 9, name: 'Adam', weight: 48, height: 157},
  {position: 10, name: 'Bella', weight: 45, height: 189},
  {position: 11, name: 'Rascal', weight: 62, height: 174},
  {position: 12, name: 'Faker', weight: 44, height: 126},
  {position: 13, name: 'Jordan', weight: 56, height: 147},
  {position: 14, name: 'Will', weight: 48, height: 168},
  {position: 15, name: 'Bryant', weight: 30, height: 167},
  {position: 16, name: 'Young', weight: 82, height: 197},
  {position: 17, name: 'Beal', weight:75, height: 210},
  {position: 18, name: 'Wade', weight: 49, height: 104},
  {position: 19, name: 'Peter', weight: 39, height: 154},
  {position: 20, name: 'Billy', weight: 90, height: 185},
];
