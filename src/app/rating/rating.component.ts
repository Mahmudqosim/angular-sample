import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})

export class RatingComponent {
  rating = 0;

  setRating(value: number): void {
    this.rating = value;
  }
}
