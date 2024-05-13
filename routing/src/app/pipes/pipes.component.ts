import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { SlicePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe, CurrencyPipe, SlicePipe, DecimalPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'

})
export class PipesComponent{
  presentDate = new Date();
//updated Async Example
  currentTime$! : Observable<Date>;
// Formatting text pipe example
title: string = "Angular Pipes";
constructor(){
  //Updated async
  this.currentTime$ = interval(1000).pipe(map(() => new Date()))
}
  price : number = 20000;
  Fruits = ["Apple", "Orange", "Mango", "Kiwi", "Pomegranate"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
}


