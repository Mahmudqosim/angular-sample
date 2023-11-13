import { Component, Input } from '@angular/core';

type TReview = {
  name: string;
  reviewTitle?: string | null;
  reviewComment?: string | null;
  rating: number;
  dateOfReview: string;
  type: 'client' | 'freelancer';
};

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  @Input({ required: false }) reviews!: TReview[];
}
