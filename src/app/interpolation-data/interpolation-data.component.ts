import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-data',
  templateUrl: './interpolation-data.component.html',
  styleUrls: ['./interpolation-data.component.css']
})
export class InterpolationDataComponent {
  name:string="shyam sundar yadav";
  price:number=100;
  quantity:number=3;
  tax:number=8.5;
  editMode:boolean=true;

  student={
    name:'shyam',
    role:'developer',
    phone:'98765463210'
  }



  calculateTotal(){
    return this.price*this.quantity;
  }

  calculateTax(){
   return (this.price * this.tax)/100
  }

}
