import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DescriptionWrapperComponent } from "./description-wrapper.component";

@NgModule({
  declarations: [
    DescriptionWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DescriptionWrapperComponent
  ] 
})
export class DescriptionWrapperModule { }