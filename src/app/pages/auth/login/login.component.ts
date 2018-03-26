import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_TRANSITION } from '../../../app.animation';
import {_USERS} from '../../../core/data/users';
import { SettingsService } from '../../../core/settings/settings.service';

@Component({
  selector: 'vr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router,private settingservice:SettingsService
  ) { }

  ngOnInit() {
  }

  login() {   
    this.settingservice.setUser(this.settingservice.arrayRandom(_USERS));
    this.router.navigate(['/pages/oferta']);
  }

}
