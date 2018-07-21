import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';//
import { SingleProfileComponent, ComponentImagesDialogComponent } from './single-profile.component';
import { UtilsModule } from '../../../core/utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,MatTableModule,MatChipsModule,MatSelectModule,
  MatMenuModule,MatTooltipModule, MatCardModule, MatIconModule, MatListModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';//
import { RouterModule } from '@angular/router';//
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { UICarouselModule } from "ui-carousel";

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
    MatTableModule,
    UICarouselModule,
    Ng2CarouselamosModule,
    MatDialogModule,

   

  ],
  entryComponents:[ComponentImagesDialogComponent],
  declarations: [SingleProfileComponent,ComponentImagesDialogComponent],
  exports: [SingleProfileComponent,ComponentImagesDialogComponent]
})
export class SingleProfileModule { }
