import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div class="rating">
      <div class="rating__items">
        <input class="rating__input" type="radio" name="rating" id="rate5" value="5" [attr.checked]="isChecked(5)">
        <label class="rating__label" for="rate5"></label>

        <input class="rating__input" type="radio" name="rating" id="rate4" value="4" [attr.checked]="isChecked(4)">
        <label class="rating__label" for="rate4"></label>

        <input class="rating__input" type="radio" name="rating" id="rate3" value="3" [attr.checked]="isChecked(3)">
        <label class="rating__label" for="rate3"></label>

        <input class="rating__input" type="radio" name="rating" id="rate2" value="2" [attr.checked]="isChecked(2)">
        <label class="rating__label" for="rate2"></label>

        <input class="rating__input" type="radio" name="rating" id="rate1" value="1" [attr.checked]="isChecked(1)">
        <label class="rating__label" for="rate1"></label>
      </div>
    </div>
  `,
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() rating: number | null | undefined = null;

  isChecked(value: number) {
    return this.rating === value ? '' : null;
  }
}
