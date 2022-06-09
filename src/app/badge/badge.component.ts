import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: `
    <p class="bage" [style.background-color]="color">
      {{ bage }}
    </p>
  `,
  styles: ['.bage { display: inline-block; margin: 0; padding: 5px; color: #FFF }']
})
export class BadgeComponent {
  @Input() bage: string | number | undefined
  @Input() color: string | undefined = 'red';

  constructor() { }
}
