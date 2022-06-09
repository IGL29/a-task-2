import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  template: `<button class="color-btn" [ngClass]="{ 'color-btn--active': isActive }" [ngStyle]="{ 'background-color': color }"></button>`,
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  @Input() isActive: boolean = false;
  @Input() color: string = ''
}
