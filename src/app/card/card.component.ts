import { IProduct } from './../types/card';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card__inner">
        <div class="card__img-wrapper img-wrapper">
          <app-badge [bage]="product?.bage?.value"></app-badge>
          <img class="img-wrapper__img" [src]="product?.image" />
        </div>

        <p class="card__company">{{ product?.company }}</p>
        <h3 class="card__title">{{ product?.title }}</h3>

        <div class="card__rates">
          <app-rating class="card__rating" [rating]="product?.rating?.value"></app-rating>
          <span>{{ product?.rating?.reviews }} отзыва</span>
        </div>

        <app-price class="card__price" [price]="product?.price"></app-price>

        <app-color [color]="product?.colors?.[0]?.color || ''"></app-color>

        <div class="card__actions">
          <app-icon></app-icon>
          <app-button class="card__btn" [text]="'buy'" [isDisabled]="isAdded" (click)="toggleButton()"></app-button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product?: IProduct
  isAdded = false;

  constructor() {}

  toggleButton() {
    this.isAdded = !this.isAdded;
  }
}
