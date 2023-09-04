import { Component, Input } from '@angular/core';
import { Tasks } from '../Tasks';

@Component({
  selector: 'app-tasks-list-component',
  templateUrl: './tasks-list-component.component.html',
  styleUrls: ['./tasks-list-component.component.css']
})
export class TasksListComponentComponent 
{
  @Input() task!: Tasks;
  
}
