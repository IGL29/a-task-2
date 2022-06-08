import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button class="button" [ngClass]="{ 'button--disabled': isDisabled }">{{ text }}</button>`,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = 'Button'
  @Input() isDisabled = false
}
