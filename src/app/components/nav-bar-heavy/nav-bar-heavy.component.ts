import {Component, OnInit} from '@angular/core';


interface ButtonConfig{

}

@Component({
  selector: 'app-nav-bar-heavy',
  templateUrl: './nav-bar-heavy.component.html',
  styleUrls: ['./nav-bar-heavy.component.scss']
})
export class NavBarHeavyComponent implements OnInit {
  buttons: [];
  stroke = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
