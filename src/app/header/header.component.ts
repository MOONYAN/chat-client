import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() name: string;

  @Input() title: string;

  @Output() $leave = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLeave() {
    this.$leave.emit();
  }
}
