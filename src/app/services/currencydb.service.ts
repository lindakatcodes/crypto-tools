import { Injectable } from '@angular/core';
import { ApiDataService } from './api-data.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDbService {
  constructor(private apiService: ApiDataService) {}
  
  currencyEndpoint: string = '/v1/cryptocurrency/map';

  setCurrencyData() {
    const dataIsSet = localStorage.getItem('currencyValues');
    if (!dataIsSet) {
      this.apiService.getApiData(this.currencyEndpoint).subscribe(res => {
        const values: any = [];
        res.map((bit: any) => values.push(bit))
        localStorage.setItem('currencyValues', JSON.stringify(values));
      })
    }
    return JSON.parse(dataIsSet!);
  }
}
