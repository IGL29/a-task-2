import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <div class="dropdown">
      <app-button></app-button>
      <ul class="dropdown__list">
        <li class="dropdown__item">Item 1</li>
      </ul>
    </div>
  `,
  styles: [`
    .dropdown {
      display: inline-block;
    }
    .dropdown__list {
      margin: 10px;
      padding: 4px 8px;
      border-radius: 8px;
      box-shadow: 0 8px 6px 0 #EEEEEE;
      border: 1px solid #EEEEEE;
      background-color: #FFFFFF;
      list-style-type: none;
    }
    .dropdown__item {
      padding: 8px;
    }
  `]
})
export class DropdownComponent { }