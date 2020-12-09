import { Component, OnInit } from '@angular/core';
/**
 * user interface
 */
@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.scss']
})
export class Ui2Component implements OnInit {
  /**
   * property who is used to open or close nav menu
   */
  public open: boolean;
  constructor() {
    this.open = true;
  }

  ngOnInit(): void {
  }
  /**
   * this method is used to open or close nav menu in reverse open property
   * @example
   * (click)="toggle()"
   */
  public toggle(): void {
    this.open = !this.open;
  }

}
