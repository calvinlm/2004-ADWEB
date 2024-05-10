import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TestComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives-demo';
  isLoggedIn: boolean =true
  employee: any[]=[
    {id:100, name: "Calvin"},
    {id:101, name: "Lianne"},
    {id:102, name: "Coleen"},
    {id:103, name: "Mica"},
    {id:104, name: "Alyssa"},
    {id:105, name: "Joseph"},
  ]
  
}
