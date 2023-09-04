import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // needed for ngModel

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor() {
    alert('constructor: ' + this.title);
  }

  ngOnInit(): void {
    alert('ngOnIt :' + this.title);
  }

  //Tempalte Reference Var
  handleClick(val: any) {
    console.log(val);
  }

  //ngClass
  pokemons: Pokemon[] = [
    {
      name: 'pikachu',
      rank: 1,
      isActive: false,
      type: 'electric',
    },
    {
      name: 'charmander',
      rank: 2,
      isActive: true,
      type: 'fire',
    },
  ];
}

//ngClass
interface Pokemon {
  name: string;
  rank: number;
  isActive: boolean;
  type: string;
}
