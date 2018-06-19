import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MatButtonModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatListModule, MatSelectModule, MatTabsModule, MatTooltipModule, MatChipsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../../core/utils/utils.module';
import { ScrollbarModule } from '../../core/scrollbar/scrollbar.module';
import { FiltroPerfilComponent } from './filtro-perfil.component';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';

@NgModule({
  imports: [
    CommonModule,
   
    FormsModule,   
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    ScrollbarModule,
    MatInputModule,
    MatMenuModule,
    UtilsModule,
    MatRippleModule,




    BreadcrumbsModule,
    UtilsModule,
    FlexLayoutModule,
    MatRippleModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatChipsModule,  
    MatTooltipModule,
    MatTabsModule,
    

  ],
  declarations: [FiltroPerfilComponent],
  exports: [FiltroPerfilComponent]
})
export class FiltroPerfilModule { }
