import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.scss']
})
export class WelcomeBannerComponent implements OnInit {
  @Input()
  src: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
