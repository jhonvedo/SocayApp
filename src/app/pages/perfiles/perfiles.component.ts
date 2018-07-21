import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ROUTE_TRANSITION } from '../../app.animation';
import {_PROYECTS} from '../../core/data/proyects';
import { SettingsService } from '../../core/settings/settings.service';
import {_PROFILES_MOSK} from '../../core/data/profiles.mosk';
import { _USERS_MOSK } from '../../core/data/users.mosk';

@Component({
  selector: 'vr-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss'],
  // animations: [...ROUTE_TRANSITION],
  // host: { '[@routeTransition]': '' }
})
export class PerfilesComponent implements OnInit {

 
  public profile_list:any=_PROFILES_MOSK;
  public arr:any;
  desktopGap = '24px';
  mobileGap = '16px';

  desktopWidth = `0 0 calc(33.3333% - ${this.desktopGap}`;
  tabletWidth = `0 0 calc(33.3333% - ${this.desktopGap}`;
  smallTabletWidth = `0 0 calc(50% - ${this.mobileGap}`;
  mobileWidth = `0 0 calc(100% - ${this.mobileGap}`;
  


  constructor(private settingservice:SettingsService) { }

  ngOnInit() {   
    this.arr = Array.apply(null, {
      length: this.profile_list.length/2
    }).map(Number.call, Number);
    
  }

}
  