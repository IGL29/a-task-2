import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  template: `<button class="color-btn" [ngStyle]="{ 'background-color': color }"></button>`,
  styles: ['.color-btn { border: 1px solid black; border-radius: 50%; width: 20px; height: 20px}']
})
export class ColorComponent {
  @Input() color: string = ''
}
