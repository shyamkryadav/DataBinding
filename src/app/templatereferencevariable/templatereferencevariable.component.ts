import { Component } from '@angular/core';

@Component({
  selector: 'app-templatereferencevariable',
  templateUrl: './templatereferencevariable.component.html',
  styleUrls: ['./templatereferencevariable.component.css']
})
export class TemplatereferencevariableComponent {
  value:any;

  getValue(val:any){

    // console.log(val.value)
    // console.log(val.type)
    // console.log(val.title)
    this.value=val.value;

  }

  getChkValue(chkVal:any){
    console.log(chkVal.value);
    console.log(chkVal.checked);
  }

  getRadioVal(val:any){
    console.log(val)
  }


  getSelectValue(val:any){
    console.log(val.value)
  }
}
