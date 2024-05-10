import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  isLogIn: boolean=false;
  isLogOut: boolean=true;
  list = [1,2,3,4,5];
  logInName="admin";
  users: User[] = [
    {"userId":1,"userName":'User1'},
    {"userId":2,"userName":'User2'}
  ];
}
