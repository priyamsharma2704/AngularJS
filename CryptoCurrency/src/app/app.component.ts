import { Component } from '@angular/core';
import { CommonService} from './common.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'CryptoCurrency';

  constructor(private service: CommonService){
    this.service.getCoins().subscribe(data=>{
      console.log(data);
    });
  }
}
