import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds-thu-chi',
  templateUrl: './ds-thu-chi.component.html',
  styleUrls: ['./ds-thu-chi.component.css']
})
export class DsThuChiComponent implements OnInit {

  dsDoAn = ["Pizza", "KFC", "Pho","Banh Cuon"];
  isLogIn : boolean|undefined = true;
  curDate = Date();
  n =25000;
  f = 12.34567

  constructor() { }

  ngOnInit(): void {
  }

}
