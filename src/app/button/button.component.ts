import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button>{{ text }}</button>',
  styles: [`
    button {
      padding: 12px 20px;
      border: none;
      border-radius: 10px;
      background-color: #0099FF;
      font-size: 16px;
      color: #FFF;
      cursor: pointer 
    }
  `]
})
export class ButtonComponent {
  @Input() text = 'Button'
}
