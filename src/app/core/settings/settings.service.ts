import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class SettingsService {


  constructor() { }

 public ArrayRandom(list:any[]):any{
    return list[Math.random() * list.length];
 }

}
