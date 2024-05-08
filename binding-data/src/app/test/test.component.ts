import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent{
  appName = "This printout is an example of string interpolation using one-way data binding";

  clientName:string = "Calvin";

  appliedCSSClass = "green";
  notappliedCSSClass = "false";
  myColor = "red";

  showData($event:any){
    console.log("Button is Clicked!");
      if($event){
        console.log($event.target);
        console.log($event.target.value);
      }
  }
}
