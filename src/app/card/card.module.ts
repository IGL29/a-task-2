import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { BadgeModule } from '../badge/badge.module';
import { RatingModule } from '../rating/rating.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    BadgeModule,
    ButtonModule,
    RatingModule
  ],
  exports: [
    CardComponent
  ],
  providers: [],
})
export class CardModule { }