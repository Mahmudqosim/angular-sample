import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rate-stars',
  templateUrl: './rate-stars.component.html',
  styleUrls: ['./rate-stars.component.scss']
})
export class RateStarsComponent {
  @Input({ required: true }) value!: number;
}
