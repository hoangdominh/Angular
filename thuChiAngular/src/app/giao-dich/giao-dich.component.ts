import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-giao-dich',
  templateUrl: './giao-dich.component.html',
  styleUrls: ['./giao-dich.component.css']
})
export class GiaoDichComponent implements OnInit {

  title: string | undefined; // string | Chưa xác định
  food: string="KFC";
  btn_bri = "btn btn-primary"; //Atribute Binding

  constructor() {
  }

  ngOnInit(): void {
    this.title = "Giao dịch"
  }

  thongBao() {
    alert("Bạn muốn mua " + this.food)

  }

}
