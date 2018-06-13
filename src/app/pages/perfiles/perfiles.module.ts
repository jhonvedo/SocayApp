import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilesComponent } from './perfiles.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule,MatCardModule,MatButtonToggleModule,MatRippleModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatTooltipModule, MatChipsModule, MatTabsModule } from '@angular/material';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';
import { PerfilesRoutingModule } from './perfiles.routing';
import { ProfileModule } from '../profile/profile.module';
import { UtilsModule } from '../../core/utils/utils.module';
import {SingleProfileModule} from './single-profile/single-profile.module';
@NgModule({
  imports: [
    CommonModule,
    PerfilesRoutingModule,    
    PageHeaderModule,
    BreadcrumbsModule,
    UtilsModule,
    FlexLayoutModule,
    MatRippleModule,
    MatListModule,
    SingleProfileModule,

    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatChipsModule,  
    MatTooltipModule,   
    
    MatTabsModule,
    
    
  ],
  declarations: [PerfilesComponent],
  exports:[PerfilesComponent]
})
export class PerfilesModule { }
