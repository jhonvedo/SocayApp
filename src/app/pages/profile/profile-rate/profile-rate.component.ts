import { Component, OnInit, Inject } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ProfileRateModalComponent } from '../profile-rate-modal/profile-rate-modal.component';
import { _PRODUCTS } from '../../../core/data/products.mosk';
import { Router } from '@angular/router';

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
  productos:any[]=_PRODUCTS;
  descuento=0;
  subtotal=0;
  total=0;
  selectedIndex = 0;
  lastIndex = 3;
  resumenFactura:any={};

  
  private _habilitarContinuar : boolean;
  public get habilitarContinuar() : boolean {
    //return this._habilitarContinuar;
    if(this.selectedIndex  == 1){
      return (this.haveValue(this.resumenFactura.fecha ) && 
              this.haveValue(this.resumenFactura.direccion ) && 
              this.haveValue(this.resumenFactura.telefono ) && 
              this.haveValue(this.resumenFactura.municipio ));
    }else if(this.selectedIndex  == 2){
      return (this.haveValue(this.resumenFactura.nombretitular ) && 
              this.haveValue(this.resumenFactura.apellidoTitular ) && 
              this.haveValue(this.resumenFactura.mesExpiracion ) && 
              this.haveValue(this.resumenFactura.cvc ) && 
              this.haveValue(this.resumenFactura.anioExpiracion ) && 
              this.haveValue(this.resumenFactura.numeroTarjeta ));
    }else{
      return true;
    }
   
  }
  public set habilitarContinuar(v : boolean) {
    this._habilitarContinuar = v;
  }
  
  haveValue(value){
    return value != undefined && value != '';
  }
  

  cantidades = Array.from(new Array(30),(val,index)=>index);
  constructor(public dialog: MatDialog,private router:Router) { }
  getProductosPedidos(){
    return this.productos.filter(x=>x.cant > 0);
  }

  confirmar(){
      console.log(this.resumenFactura);
      this.dialogRefDescripcion = this.dialog.open(ComponentDescriptionsDialogComponent, {
        disableClose: false,
        data:{
          description:"Se ha efectuado el pago por valor de $ "+this.total+" de manera exitosa"
        },
      });
  
      this.dialogRefDescripcion.afterClosed().subscribe(result => {
       // this.result = result;
        this.dialogRefDescripcion = null;
        this.router.navigate(["/"]);//pages/perfiles
      });
      // this.snackBar.open('I\'m a notification!', 'Confirmar', {
      //   duration: 5000
      // } as MatSnackBarConfig);
  }



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
   
  }

  ngOnInit() {
  
  }

  cambioCantidad(item){
    item.subtotal = item.precio*item.cant;
    this.calcularTotales();
  }
  calcularTotales(){  
    this.subtotal=0; 
    this.productos.filter(item=>{
      if(item.subtotal){    
        this.subtotal+=item.subtotal;
      }
    });
    this.total=this.subtotal;
  }

  previousPage() {
    this.selectedIndex -= 1;
  }

  nextPage() {
    this.selectedIndex += 1;
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

