import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaReplayService } from './utils/media-replay.service';
import { LayoutModule } from './layout/layout.module';
import { SettingsService } from './settings/settings.service';
import { MatIconModule, MatInputModule } from '@angular/material';
import { UtilsModule } from './utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [    
    CommonModule,  
    MatIconModule,
    UtilsModule,
    FlexLayoutModule,
    MatInputModule,
    LayoutModule
  ],
  providers: [
    MediaReplayService,SettingsService
  ]
})
export class CoreModule { }
