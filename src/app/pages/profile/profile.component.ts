import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';
import { SettingsService } from '../../core/settings/settings.service';
import { ActivatedRoute } from '@angular/router';
import {_USERS} from '../../core/data/users';

@Component({
  selector: 'vr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ProfileComponent implements OnInit {

  public profile:any;
  constructor(private settingservice:SettingsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      var id = params['id']; 
      this.profile=_USERS.find(x=>x.id == id); 
    });
  }

}
