import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vr-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
@Input() rating:number=0;
  constructor() { }

  ngOnInit() {
  }

}
