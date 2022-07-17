import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();
  isShow = false;
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  navOpen(): void {
    this.navToggle.emit(true);
    this.isOpen = !this.isOpen;
  }
}
