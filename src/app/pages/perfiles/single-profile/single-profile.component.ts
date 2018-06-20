import { Component, OnInit, Input } from '@angular/core';
import escape from 'lodash-es/escape';
import { SettingsService } from '../../../core/settings/settings.service';

@Component({
  selector: 'vr-single-profile',
  templateUrl: './single-profile.component.html'
})
export class SingleProfileComponent implements OnInit {
  @Input() profile:any;
  items: Array<any> = [];
  
 
  constructor(private settingservice:SettingsService) { }

  ngOnInit() {   
    this.profile.about = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum';
    this.items = [
      { name: 'assets/img/demo/avatars/1.png' },
      { name: 'assets/img/demo/avatars/2.png' },
      { name: 'assets/img/demo/avatars/3.png' },
      { name: 'assets/img/demo/avatars/4.png' },
      { name: 'assets/img/demo/avatars/5.png' },
      { name: 'assets/img/demo/avatars/6.png' },
      { name: 'assets/img/demo/avatars/7.png' },
      { name: 'assets/img/demo/avatars/8.png' },
      { name: 'assets/img/demo/avatars/9.png' },
      { name: 'assets/img/demo/avatars/10.png' },
      { name: 'assets/img/demo/avatars/11.png' },
      { name: 'assets/img/demo/avatars/12.png' },
    ];
  }
}
