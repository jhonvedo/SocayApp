import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { ROUTE_TRANSITION } from '../../app.animation';
import { ActivatedRoute } from '@angular/router';
import {_PROYECTS} from '../../core/data/proyects';
@Component({
  selector: 'vr-oferta-details',
  templateUrl: './oferta-details.component.html',
  styleUrls: ['./oferta-details.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class OfertaDetailsComponent implements OnInit,OnDestroy  {

  project: any;
  private sub: any;

  constructor(private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
       var id = params['id']; // (+) converts string 'id' to a number
       this.project=_PROYECTS.find(x=>x.id == id); 
     //  console.log(this.project);
       /*this.project = {
        background: 'linear-gradient(to left, #cbad6d, #d53369)',
        date: moment(),
        codename: 'Qyntax',
        name: 'Product Redesign',
        status: 'ONGOING',
        members: [
          {
            image: 'assets/img/demo/avatars/1.png',
          },
          {
            image: 'assets/img/demo/avatars/7.png',
          },
          {
            image: 'assets/img/demo/avatars/9.png',
          },
          {
            image: 'assets/img/demo/avatars/3.png',
          }
        ],
        labels: ['Redesign', 'Product', 'Illustration', 'Web Design']
       }*/
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /*ngOnInit() {
    
   
  }*/

}
