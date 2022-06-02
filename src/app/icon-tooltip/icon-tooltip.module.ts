import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconModule } from "../icon/icon.module";
import { TooltipModule } from "../tooltip/tooltip.module";
import { IconTooltipComponent } from "./icon-tooltip.component";

@NgModule({
  declarations: [
    IconTooltipComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    TooltipModule
  ],
  exports: [
    IconTooltipComponent
  ],
  providers: [],
})
export class IconTooltipModule {

}