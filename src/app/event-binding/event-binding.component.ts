import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  count:number=0;
  clickMethod(){
    // alert(this.count)
    this.count++;
    // alert(this.count)
  }


  value:any="shyam"
  changeVal(val:any){
      // console.log(val)
      this.value=val;
  }

  value2:any="";
  ImpChange(event:any){
    // console.log(event.data)
    // console.log(event.target.value)
    // this.value2=event.data
    this.value2=event.target.value;
  }



  value3:any="Angular";
  onSelectChange(event:any){
    this.value3=event.target.value;
  }

  onScroll(event:any){
    console.log(event)

  }
}
