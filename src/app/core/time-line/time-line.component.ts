import { Component, OnInit, Input } from '@angular/core';
import { TimeLineModel } from './time-line.model';

@Component({
  selector: 'vr-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
  @Input('data') item:TimeLineModel;
  @Input('completeListener') listener:any;

  public onClick(index):void{
    // if(this.listener){
    //   if(this.listener(this.items[index])){
    //     this.items[index]['complete']=!this.items[index]['complete'];
    //   }
    // }
  }

  ngOnInit(): void {

  }

}
