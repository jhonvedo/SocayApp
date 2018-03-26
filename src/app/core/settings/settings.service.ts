import { ElementRef, Injectable } from '@angular/core';
import { json } from 'body-parser';

@Injectable()
export class SettingsService {


  constructor() { }

 public arrayRandom(list:any[]):any{ 
    return list[Math.floor(Math.random()*list.length)];
 }

 public getUser():any{
  var strUser = localStorage.getItem('user');
  return JSON.parse(strUser);
 }
 public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
 }

}
