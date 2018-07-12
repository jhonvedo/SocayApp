import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vr-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
@Input() rating:number=0;
@Input() maxRating:number=5;

  new_rating:number=0;
  starts:string[]=[];
  constructor() { }

  ngOnInit() {
    for (let index = 1; index <= this.maxRating; index++) {
      var tipo="";
      if(this.rating>=index){
        // if(this.rating.toString().split(".").length > 1 || this.rating.toString().split(",").length){
        //   tipo="MEDIA";
        // }else{
          tipo="COMPLETA";
          this.new_rating++;
      //  }
    //  tipo="MEDIA";
       
      }else{
        tipo="VACIA";
      }
      this.starts.push(tipo);
      
    }
   // console.log(this.starts);

  }

}
