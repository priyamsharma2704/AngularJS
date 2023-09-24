import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

    getCoins() 
    {
            const url =
            'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7f3b62a5aamshfd589dde56ad001p1bf625jsnf97a213f15b5',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
            },
            };

            return this.http.get(url, options);
    }

    getCoin(uuid: string)
    {
        console.log("in service, uuid:" + uuid);
        const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coin/' + uuid,
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h'
            },
            headers: {
              'X-RapidAPI-Key': '7f3b62a5aamshfd589dde56ad001p1bf625jsnf97a213f15b5',
              'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
          };

        return this.http.get(options["url"], options);
    }



}
