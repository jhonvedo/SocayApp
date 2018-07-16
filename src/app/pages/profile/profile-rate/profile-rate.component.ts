import { Component, OnInit, Inject } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileRateModalComponent } from '../profile-rate-modal/profile-rate-modal.component';
import { _PRODUCTS } from '../../../core/data/products.mosk';

@Component({
  selector: 'vr-profile-rate',
  templateUrl: './profile-rate.component.html',
  styleUrls: ['./profile-rate.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ProfileRateComponent implements OnInit {
  dialogRef: MatDialogRef<ProfileRateModalComponent>;
  dialogRefDescripcion: MatDialogRef<ComponentDescriptionsDialogComponent>;
  productos=_PRODUCTS;

  cantidades = Array.from(new Array(30),(val,index)=>index);
  constructor(public dialog: MatDialog) { }

  openImg(imagenes){
    this.dialogRef = this.dialog.open(ProfileRateModalComponent, {
      disableClose: false,
      data:{
        imges:imagenes
      },
    });

    this.dialogRef.afterClosed().subscribe(result => {
     // this.result = result;
      this.dialogRef = null;
    });
  }

  open(){
    this.dialogRefDescripcion = this.dialog.open(ComponentDescriptionsDialogComponent, {
      disableClose: false,
      data:{
        description:"efsdfsdfsdfsdfsdfsdfsdfsdfdsdffsdfsdfsdfs"
      },
    });

    this.dialogRefDescripcion.afterClosed().subscribe(result => {
     // this.result = result;
      this.dialogRefDescripcion = null;
    });
  }

  ngOnInit() {
  
  }

  cambioCantidad(item){
    item.subtotal = item.precio*item.cant;
  }

}



@Component({
  selector: 'vr-component-description-dialog',
  template: `
  <p>{{description}}</p>
  <mat-dialog-actions align="end">
    <button mat-button (click)="dialogRef.close('')">De acuerdo</button>   
  </mat-dialog-actions>
  `
})
export class ComponentDescriptionsDialogComponent {
  description:string="";
  constructor(public dialogRef: MatDialogRef<ComponentDescriptionsDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
      this.description = data.description;
   }
}

