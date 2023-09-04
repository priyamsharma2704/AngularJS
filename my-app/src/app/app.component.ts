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
 
  //ngClass
  pokemons: Pokemon[] = [
    {
      name:"pikachu",
      rank: 1,
      isActive: false,
      type: "electric"
    },
    {
      name:"charmander",
      rank: 2,
      isActive: true,
      type: "fire"
    }
  ]
}

//ngClass
interface Pokemon{
  name:string,
  rank: number,
  isActive: boolean,
  type: string
}
