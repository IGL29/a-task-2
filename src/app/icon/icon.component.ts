import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <div>
      <span class="material-icons icon">{{ icon }}</span>
    </div>
  `,
  styles: ['']
})
export class IconComponent {
  @Input() icon = 'add'
}
