import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-filtro-perfil',
  templateUrl: './filtro-perfil.component.html',
  styleUrls: ['./filtro-perfil.component.scss']
})
export class FiltroPerfilComponent implements OnInit {

  desktopGap = '24px';
  mobileGap = '16px';

  desktopWidth = `0 0 calc(33.3333% - ${this.desktopGap}`;
  tabletWidth = `0 0 calc(33.3333% - ${this.desktopGap}`;
  smallTabletWidth = `0 0 calc(50% - ${this.mobileGap}`;
  mobileWidth = `0 0 calc(100% - ${this.mobileGap}`;
  
  constructor() { }

  ngOnInit() {
  }

}
