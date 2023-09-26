import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input() item = "";

    msg :string = "this is child component";
    @Output() event = new EventEmitter<string>();

    sendMessage(){
      this.event.emit(this.msg);
    }
}
