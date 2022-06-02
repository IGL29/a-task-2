import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <div class="tooltip tooltip-top">
      {{ text }}
    </div>
  `,
  styles: [`
    .tooltip {
      position: relative;
      display: inline-block;
      max-width: 263px;
      padding: 6px 15px 6px 15px;
      border: 1px solid #C6CACC;
      border-radius: 2px;
    }
    .tooltip:after {
      position: absolute;
      content: "";
      right: 100%;
      width: 15px;
      height: 1px;
      border-top: 9px;
      border-right: 11px;
      border-bottom: 9px;
      border-style: solid;
      border-left: 0;
      border-right-color: #C6CACC;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
  `]
})
export class TooltipComponent {
  text = 'Some text';
}
