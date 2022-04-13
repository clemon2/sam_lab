import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-jobtitle',
  templateUrl: './jobtitle.component.html',
  styleUrls: ['./jobtitle.component.scss']
})
export class JobtitleComponent implements OnInit {
  typesOfDaily: string[] = ['掃地', '買菜','洗衣服', '晾衣服', '接小孩', '繳水電費','洗碗','拖地'];
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {

  }
  checked = false;
      indeterminate = false;
      labelPosition: 'before' | 'after' = 'after';
      disabled = false;

      openDialog() {
        this.dialog.open(DialogComponent);
      }
}
