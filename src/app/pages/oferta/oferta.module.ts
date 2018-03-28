import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertaComponent } from './oferta.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatTooltipModule, MatChipsModule } from '@angular/material';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';
import { OfertaRoutingModule } from './oferta.routing';

@NgModule({
  imports: [
    CommonModule,
    OfertaRoutingModule,
    FormsModule,
    RouterModule,
    PageHeaderModule,
    MatChipsModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule
  ],
  declarations: [OfertaComponent]
})
export class OfertaModule { }
