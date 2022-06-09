import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button class="button" [ngClass]="{ 'button--disabled': isDisabled }"><ng-content></ng-content>{{ text }}</button>`,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = ''
  @Input() isDisabled = false
}
