import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SettingsService } from '../../settings/settings.service';

@Component({
  selector: 'vr-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit, AfterViewInit {

  isOpen: boolean;
  user:any;
  constructor(private settingsservice:SettingsService) { }

  ngOnInit() {
    this.user = this.settingsservice.getUser();
  }

  ngAfterViewInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }
}
