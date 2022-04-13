import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.scss']
})
export class PrimengComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
 sweetalert():void{
    Swal.fire('Any fool can use a computer')
   }
}
