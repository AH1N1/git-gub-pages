import {Component, Input, OnInit} from '@angular/core';

const SIDE_LEFT = 'left';
const SIDE_RIGHT = 'right';

@Component({
  selector: 'app-side-container',
  templateUrl: './side-container.component.html',
  styleUrls: ['./side-container.component.scss']
})
export class SideContainerComponent implements OnInit {
  @Input()
  side: string;
  contentLeft = true;
  contentRight = false;
  float: 'left' | 'right' = 'left';

  constructor() {
  }

  ngOnInit(): void {
    this.setSide();
    this.setStyle();
  }

  private setSide(): void {
    if (this.side) {
      this.contentLeft = SIDE_LEFT === this.side;
      this.contentRight = SIDE_RIGHT === this.side;
    }
  }

  private setStyle(): void {
    this.float = this.contentLeft ? 'right' : this.float;
  }
}
