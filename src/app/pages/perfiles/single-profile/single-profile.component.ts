import { Component, OnInit, Input, Inject } from '@angular/core';
import escape from 'lodash-es/escape';
import { SettingsService } from '../../../core/settings/settings.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'vr-single-profile',
  templateUrl: './single-profile.component.html'
})
export class SingleProfileComponent implements OnInit {
  @Input() profile:any={};
 
  dialogRef:any;
 
  constructor(private settingservice:SettingsService,public dialog: MatDialog) { }

  ngOnInit() {    
    this.getImages(this.profile);    
  }
  showImage(){
    this.dialogRef = this.dialog.open(ComponentImagesDialogComponent, {
      disableClose: false,
      data:{
        imges:this.profile.allProducts
      },
    });

    this.dialogRef.afterClosed().subscribe(result => {
    
      this.dialogRef = null;
   
    });
  }
  getImages(profile){
    profile.allProducts =[];
    
    profile.products.filter(item=>{
        if(item.evidencias!=undefined ){
          item.evidencias.filter(evidencia=>{
          
            if(profile.allProducts.indexOf(evidencia) == -1){
              profile.allProducts.push(evidencia); 
            }
                    
          });
         
        }
    });

  }
}



@Component({
  selector: 'vr-component-images-dialog',
  template: `
  
  <ui-carousel [infinite]="false" [fade]="false" [speed]="500" height="450px" width="650px">
  <ui-carousel-item *ngFor="let img of imges">
      <img src="assets/img/experiencia/{{img}}" alt="" height="450px" width="650px" draggable="true">
  </ui-carousel-item> 
  </ui-carousel>
  <mat-dialog-actions align="end">
  <button mat-button (click)="dialogRef.close('Cerrar')">Cerrar</button> 
  </mat-dialog-actions>

  `
})
export class ComponentImagesDialogComponent {
  imges:any[]=[];
  constructor(public dialogRef: MatDialogRef<ComponentImagesDialogComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.imges = data.imges;     
  }
}
