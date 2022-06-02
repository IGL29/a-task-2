import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <app-badge></app-badge>
      <app-rating></app-rating>
      <app-button></app-button>
    </div>
  `,
  styles: [`
    .card {
      display: inline-block;
      padding: 36px 24px;
      border: 1px solid #DDDDDD;
      border-radius: 8px;
      background-color: #FFFFFF;
    }
  `]
})
export class CardComponent { }
