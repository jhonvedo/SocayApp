import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';
import { SettingsService } from '../../core/settings/settings.service';

@Component({
  selector: 'vr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ProfileComponent implements OnInit {

  public profile:any;
  constructor(private settingservice:SettingsService) { }

  ngOnInit() {
    this.profile = this.settingservice.getUser();
  }

}
