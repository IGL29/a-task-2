import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IPrice } from '../types/card';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  @Input() price: IPrice | null | undefined
  // newPrice: number | null = null

  constructor() {
    console.log('price: ', this.price)
  }

  ngOnInit() {
    console.log('price: ', this.price)
  }

  // ngOnChanges() {
  //   if (this.price) {
  //     this.newPrice = this.price?.discount ? (this.price.value * (1 - this.price.discount)) : this.price?.value
  //   }
  // }

  get newPrice(): number {
    if (this.price && this.price.value) {
      return this.price && this.price.discount && this.price.value ? (this.price?.value * (1 - this.price.discount)) : this.price.value
    }
    return 0
  }

  get discount(): number {
    return this.price ? this.price.discount * 100 : 0;
  }
}
