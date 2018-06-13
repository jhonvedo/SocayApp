import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OfertaDetailsComponent  } from './oferta-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import {
  MatButtonModule, MatChipsModule, MatIconModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatTooltipModule
} from '@angular/material';
import { OfertaDetailsRoutingModule } from './oferta-details.routing';

@NgModule({
  imports: [
    CommonModule,
    OfertaDetailsRoutingModule,
    FlexLayoutModule,
    PageHeaderModule,
    BreadcrumbsModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule
  ],
  declarations: [OfertaDetailsComponent]
})
export class OfertaDetailsModule { }
