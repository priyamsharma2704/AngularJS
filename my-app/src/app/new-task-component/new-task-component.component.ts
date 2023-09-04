import { Component } from '@angular/core';
import { Tasks } from '../Tasks';

@Component({
  selector: 'app-new-task-component',
  templateUrl: './new-task-component.component.html',
  styleUrls: ['./new-task-component.component.css']
})
export class NewTaskComponentComponent 
{
  tasks: Tasks[] = [];
  constructor()
  {
    this.tasks = [
      {
        sno:3,
        title:"this is title 3",
        desc: "description 3",
        active:true
      },
      {
        sno:1,
        title:"this is title 1",
        desc: "description 1",
        active:false
      },
      {
        sno:2,
        title:"this is title 2",
        desc: "description 2",
        active:true
      }
    ];
  }

  addNewTask(newTask:string)
  {
    console.log(newTask);
  }
}
