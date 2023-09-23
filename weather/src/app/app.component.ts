import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonService} from './common.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    title = 'weather';
    city = "tillsonburg";
    constructor(private service:CommonService)
    {
        // this.service.getWeatherData(this.city).subscribe(data=>{
        //     console.log(data);
        // });
    }
    
    onNameChange(event: any)
    {
        this.city = event.target.value;
    }

    getWeather()
    {
        this.service.getWeatherData(this.city).subscribe(data=>{
            console.log(data);
        });
    }
}
