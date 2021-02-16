import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar-heavy',
  templateUrl: './nav-bar-heavy.component.html',
  styleUrls: ['./nav-bar-heavy.component.scss']
})
export class NavBarHeavyComponent implements OnInit {
  @Input()
  light: boolean;

  @Input()
  showMain: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
