import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // needed for ngModel

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  //Tempalte Reference Var
  handleClick(val:any)
  {
    console.log(val);
  }
 
}
