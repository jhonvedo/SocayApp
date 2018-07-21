import { Component, OnInit, Input } from '@angular/core';
import { TimeLineModel } from '../../../core/time-line/time-line.model';

@Component({
  selector: 'vr-profile-record',
  templateUrl: './profile-record.component.html',
  styleUrls: ['./profile-record.component.scss']
})
export class ProfileRecordComponent implements OnInit {
@Input() records:any[]=[];

  public timelineData:TimeLineModel[] = [];
  constructor() { }

  ngOnInit() {
    if(this.records){
      this.records.forEach(item => {
        var line:TimeLineModel=new TimeLineModel();
      });
    }
  }
  public click(event){
   // console.log(event);
  }


  public promedioCalificacion(item){
   
    var promedio:number=0;
    if(item.calificaciones!=undefined){
      item.calificaciones.forEach(element => {
        promedio+=element.calificacion;
      });
    }    
    return item.calificaciones!=undefined?promedio/item.calificaciones.length:0;

  }

}
