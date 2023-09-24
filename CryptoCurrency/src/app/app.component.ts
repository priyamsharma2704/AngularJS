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
    coin:string = "";
    coins: any = [];

    constructor(private service: CommonService)
    {
        this.service.getCoins().subscribe(data=>{
            console.log("coins = " , data);
            this.coins = data;
        });

        this.getCoin("razxDUgYGNAdQ");
    }

    getCoin(uuid: string)
    {
        console.log(uuid);
        this.service.getCoin(uuid).subscribe(coin=>{
            console.log("Coin = " , coin);
        });
    }

    onInputChange(event:any)
    {
        this.coin = event.target.value;
    }

    getCoinDetails()
    {
        console.log("get coin details");
        var coins = this.coins.data.coins;
        for(var i = 0 ; i <coins.length; i++)
        {
            if(this.coin == coins[i].name.toLowerCase())
            {
                this.getCoin(coins[i].uuid);
                break;
            }
        }
    }
}