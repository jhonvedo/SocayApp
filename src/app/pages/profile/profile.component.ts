import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';
import { SettingsService } from '../../core/settings/settings.service';
import { ActivatedRoute } from '@angular/router';
import {_USERS} from '../../core/data/users';
import { _PROFILE_RECORD } from '../../core/data/profile-record.mosk';

@Component({
  selector: 'vr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ProfileComponent implements OnInit {

  public profile:any;
  public records:any[]=[];
  constructor(private settingservice:SettingsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var tmp=[];
    this.activatedRoute.params.subscribe(params => {
      var id = params['id']; 
      this.profile=_USERS.find(x=>x.id == id); 
    });
    _PROFILE_RECORD.filter(item=>{
      var record:any = {...item};
      record.fecha_old=record.fecha;
      var fecha = record.fecha_old.split("-");
      record.fecha = new Date(fecha[0],fecha[1],fecha[2]);
      tmp.push(record);
    });
    this.records=tmp.sort((x,y) => {
      if (x.fecha > y.fecha) {
        return -1;
    }

    if (x.fecha < y.fecha) {
        return 1;
    }

    return 0;
    }); // - rather than < ,and + rather than >
    console.log(this.records);
  }

}
