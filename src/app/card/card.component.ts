import { IProduct } from './../types/card';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card__inner">
        <div class="card__img-wrapper img-wrapper">
          <app-badge class="img-wrapper__bage" [bage]="product?.bage?.value"></app-badge>
          <img class="img-wrapper__img" [src]="currentImage" />
        </div>

        <p class="card__company">{{ product?.company }}</p>
        <h3 class="card__title">{{ product?.title }}</h3>

        <div class="card__rates">
          <app-rating class="card__rating" [rating]="product?.rating?.value"></app-rating>
          <span>{{ product?.rating?.reviews }} отзыва</span>
        </div>

        <app-price class="card__price" [price]="product?.price"></app-price>

        <div class="colors">
          <app-color class="colors__color" [isActive]="isColorActive(1)" [color]="product?.colors?.[1]?.color || ''" (click)="activeColorIndex=1"></app-color>
          <app-color class="colors__color" [isActive]="isColorActive(0)" [color]="product?.colors?.[0]?.color || ''" (click)="activeColorIndex=0"></app-color>
        </div>

        <div class="card__actions">
          <app-button class="card__btn add-to-cart" [text]="'Добавить в корзину'"></app-button>

          <app-button class="card__btn favorites" [isDisabled]="isFavourites" (click)="toggleButton()">
            <app-icon [icon]="'favorite'"></app-icon>
          </app-button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product?: IProduct
  @Input() activeColorIndex = 0

  isFavourites = false;

  constructor() { }

  set colorIndex(index) {
    this.activeColorIndex = index
  }

  get colorIndex() {
    return this.activeColorIndex;
  }

  isColorActive(index: number) {
    return this.activeColorIndex === index;
  }

  get currentImage() {
    return this.product?.colors?.[this.activeColorIndex]?.image || this.product?.image;
  }

  toggleButton() {
    this.isFavourites = !this.isFavourites;
  }
}
