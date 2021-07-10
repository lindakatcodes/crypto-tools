import { Injectable } from '@angular/core';
import { ApiDataService } from './api-data.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyDbService {
  constructor(private apiService: ApiDataService) {}

  currencyEndpoint: string = '/v1/cryptocurrency/map';
  fiatEndpoint: string = '/v1/fiat/map';

  setCurrencyData() {
    const dataIsSet = localStorage.getItem('currencyValues');
    if (!dataIsSet) {
      this.apiService.getApiData(this.currencyEndpoint).subscribe((res) => {
        const values: any = [];
        res.map((bit: any) => {
          const combinedName = `${bit.name} - ${bit.symbol}`;
          const fullBit = { ...bit, nameSymbol: combinedName };
          values.push(fullBit);
        });
        localStorage.setItem('currencyValues', JSON.stringify(values));
        return values;
      });
    }
    return JSON.parse(dataIsSet!);
  }

  setFiatData() {
    const dataIsSet = localStorage.getItem('fiatValues');
    if (!dataIsSet) {
      this.apiService.getApiData(this.fiatEndpoint).subscribe((res) => {
        const values: any = [];
        res.map((bit: any) => {
          const combinedName = `${bit.name} - ${bit.symbol}`;
          const fullBit = { ...bit, nameSymbol: combinedName };
          values.push(fullBit);
        });
        localStorage.setItem('fiatValues', JSON.stringify(values));
        return values;
      });
    }
    return JSON.parse(dataIsSet!);
  }
}
