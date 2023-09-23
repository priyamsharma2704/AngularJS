import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

    constructor(private http:HttpClient) 
    {
        
    }

    getWeatherData(city:string)
    {
        var options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: city},
            headers: {
              'X-RapidAPI-Key': '7f3b62a5aamshfd589dde56ad001p1bf625jsnf97a213f15b5',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        

        return this.http.get(options["url"], options);
    }
}
