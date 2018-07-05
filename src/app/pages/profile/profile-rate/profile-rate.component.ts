import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';

@Component({
  selector: 'vr-profile-rate',
  templateUrl: './profile-rate.component.html',
  styleUrls: ['./profile-rate.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ProfileRateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
