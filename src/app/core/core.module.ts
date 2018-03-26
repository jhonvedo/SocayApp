import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaReplayService } from './utils/media-replay.service';
import { LayoutModule } from './layout/layout.module';
import { SettingsService } from './settings/settings.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  providers: [
    MediaReplayService,SettingsService
  ]
})
export class CoreModule { }
