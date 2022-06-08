import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from './card/card.module';
import { IconTooltipModule } from './icon-tooltip/icon-tooltip.module';
import { ButtonModule } from './button/button.module';
import { RatingModule } from './rating/rating.module';
import { AppComponent } from './app.component';
import { DropdownModule } from './dropdown/dropdown.module';
import { DescriptionWrapperModule } from './description-wrapper/desription-wrapper.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CardModule,
    ButtonModule,
    RatingModule,
    IconTooltipModule,
    DropdownModule,
    DescriptionWrapperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
