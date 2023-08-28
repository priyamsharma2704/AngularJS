import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  tasks = [
    "Visit Relatives", 
    "call Dad",
    "go to gym", 
    "shopping", 
    "pay bills"
  ];
}
