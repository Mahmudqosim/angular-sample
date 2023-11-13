import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { UserRatingsComponent } from './user-ratings/user-ratings.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RateStarsComponent } from './rate-stars/rate-stars.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    UserRatingsComponent,
    ReviewsComponent,
    RateStarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
