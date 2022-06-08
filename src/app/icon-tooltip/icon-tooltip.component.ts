import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-tooltip',
  template: `
    <div>
      <ng-content></ng-content>

      <div>
        <app-icon></app-icon>
        <app-tooltip></app-tooltip>
      </div>
    <div>
  `,
  styles: [``]
})
export class IconTooltipComponent { }
