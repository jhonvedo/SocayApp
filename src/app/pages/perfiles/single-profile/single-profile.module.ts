import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProfileComponent } from './single-profile.component';
import { UtilsModule } from '../../../core/utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,MatChipsModule, MatCardModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [SingleProfileComponent],
  exports: [SingleProfileComponent]
})
export class SingleProfileModule { }
