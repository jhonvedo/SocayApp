import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';//
import { SingleProfileComponent } from './single-profile.component';
import { UtilsModule } from '../../../core/utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,MatTableModule,MatChipsModule,MatSelectModule,
  MatMenuModule,MatTooltipModule, MatCardModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';//
import { RouterModule } from '@angular/router';//

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
    MatListModule,   
    RouterModule,
    FormsModule,
    BreadcrumbsModule, 
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    MatTableModule

   

  ],
  declarations: [SingleProfileComponent],
  exports: [SingleProfileComponent]
})
export class SingleProfileModule { }
