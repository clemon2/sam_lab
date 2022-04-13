import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.arrayValue()
  }
  menuItem:any[]=[
    {content:"登記",rounter:"form"},
    {content:"紀錄",rounter:"jobtitle"},
  ]
  menuItem_content = ["登記","紀錄"]
  array:any[]=["252","林君熹"]
 arrayValue(){
   for(let i in this.menuItem){
     console.log(this.menuItem[i].content)

   }
 }
}
