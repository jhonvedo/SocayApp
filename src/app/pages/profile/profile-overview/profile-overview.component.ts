import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vr-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.scss']
})
export class ProfileOverviewComponent implements OnInit {
  @Input() profile: any;
  constructor() { }

  ngOnInit() {
  }

}
