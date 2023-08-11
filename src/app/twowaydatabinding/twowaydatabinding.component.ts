import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent {

  email:string='';


  isChecked:boolean=false;

  gender:string='Male';
  sliderVal:number=5;

  tech:string='angular'
  


}
