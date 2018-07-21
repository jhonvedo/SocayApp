import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'vr-profile-rate-modal',
  templateUrl: './profile-rate-modal.component.html',
  styleUrls: ['./profile-rate-modal.component.scss']
})
export class ProfileRateModalComponent implements OnInit {
  imges:any[]=[];
 

  ngOnInit() {
  }

    constructor(public dialogRef: MatDialogRef<ProfileRateModalComponent>
      ,@Inject(MAT_DIALOG_DATA) public data: any) { 
      this.imges = data.imges;     
    }
  

}
