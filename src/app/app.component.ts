import { IProduct } from './types/card';
import { product } from './data/product.data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppComponent';
  product: IProduct = product
}
