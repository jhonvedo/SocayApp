import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  declarations: [RatingComponent],
  exports:[RatingComponent]
})
export class RatingModule { }
