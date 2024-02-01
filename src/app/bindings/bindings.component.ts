import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-bindings',
  template: `
    <p>{{title}}</p>
    <button (click)="liked.emit()" mat-button>Like!</button>
  `
})
export class BindingsComponent {
  @Input() title = '';
  @Output() liked = new EventEmitter();
}
