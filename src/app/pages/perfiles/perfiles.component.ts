import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ROUTE_TRANSITION } from '../../app.animation';
import {_PROYECTS} from '../../core/data/proyects';
import { SettingsService } from '../../core/settings/settings.service';


@Component({
  selector: 'vr-perfiles',
  templateUrl: './perfiles.component.html',
  // styleUrls: ['./perfiles.component.scss'],
  // animations: [...ROUTE_TRANSITION],
  // host: { '[@routeTransition]': '' }
})
export class PerfilesComponent implements OnInit {

 
  public profile:any;
  constructor(private settingservice:SettingsService) { }

  ngOnInit() {
    this.profile = this.settingservice.getUser();
  }

}
  