import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  myImg:string="../../assets/monitor.jpg";
  dynValue:string="shyam sundar yadav"  

  inStock:boolean=false;


  product={
    item1:false,
    item2:true,
    item3:false,
    item4:true,
  }
}
