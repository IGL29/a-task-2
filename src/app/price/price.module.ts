import { BadgeModule } from './../badge/badge.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PriceComponent } from "./price.component";

@NgModule({
  declarations: [
    PriceComponent,
  ],
  imports: [
    CommonModule,
    BadgeModule
  ],
  exports: [
    PriceComponent
  ]
})
export class PriceModule { }
