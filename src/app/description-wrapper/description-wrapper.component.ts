import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-wrapper',
  template: `
    <div>
      <h3>{{ title }}</h3>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    div {
      display: inline-block;
      padding: 20px;
      border: 1px solid black;
    }
  `]
})
export class DescriptionWrapperComponent { 
  @Input() title = 'title';
}