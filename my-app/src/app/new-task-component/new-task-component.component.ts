import { Component } from '@angular/core';

@Component({
  selector: 'app-new-task-component',
  templateUrl: './new-task-component.component.html',
  styleUrls: ['./new-task-component.component.css']
})
export class NewTaskComponentComponent 
{
  addNewTask(newTask:string)
  {
    console.log(newTask);
  }
}
