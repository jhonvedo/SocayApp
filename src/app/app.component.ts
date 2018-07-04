import { Component } from '@angular/core';
import { MediaReplayService } from './core/utils/media-replay.service';

@Component({
  selector: 'vr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Array<any> = []
  public rate:number=3;

  public completeListener(item){
    console.log(item);
    return true;
  }
  public timelineData:Array<Object> =[
    {
      title:"Step 1",
      icon:'<i class="fa fa-home"></i>',
      content:"Hello World",
      complete:false
    },
    {
      title:"Step 2",
      icon:'<i class="fa fa-home"></i>',
      content:"Following step to complete",
      complete:false
    }
  ];


  //noinspection JSUnusedLocalSymbols
  constructor(
    mediaReplay: MediaReplayService // workaround for Flex-Layout to receive the initial value
  ) {
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
    ]
    // Nothing here.
    // You probably want to go to /core/layout/ :)
  }






}
