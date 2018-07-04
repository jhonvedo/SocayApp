import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineComponent } from './time-line.component';
import { TimeLineGlobalComponent } from './time-line-global/time-line-global.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimeLineComponent,  TimeLineGlobalComponent],
  exports:[TimeLineComponent,TimeLineGlobalComponent]
})
export class TimeLineModule { }
