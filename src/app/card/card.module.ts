import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { BadgeModule } from '../badge/badge.module';
import { RatingModule } from '../rating/rating.module';
import { PriceModule } from '../price/price.module';
import { CardComponent } from './card.component';
import { IconModule } from './../icon/icon.module';
import { ColorModule } from '../color/color.module';
@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    BadgeModule,
    ButtonModule,
    RatingModule,
    IconModule,
    PriceModule,
    ColorModule
  ],
  exports: [
    CardComponent
  ],
  providers: [],
})
export class CardModule { }
