import { Component, Input, OnInit } from '@angular/core';
import { CurrencyDbService } from '../../services/currencydb.service';
import { Coin, convertFormData } from '../../types/interfaces';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiDataService } from 'src/app/services/api-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrencyPipe, formatCurrency } from '@angular/common';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor(
    private coindb: CurrencyDbService,
    private apiService: ApiDataService,
    private http: HttpClient
  ) {}

  allCoins!: any;
  allFiat!: any;
  mainCurrencyArray: any = [
    'Bitcoin - BTC',
    'Ethereum - ETH',
    'Polkadot - DOT',
    'Chainlink - LINK',
    'Cardano - ADA',
    'United States Dollar - USD',
    'Dogecoin - DOGE',
  ];
  mainCurrencyFullObjects: any = [];

  convertData!: convertFormData;
  convertEndpoint: string = '/v1/tools/price-conversion';
  conversionResult: any;
  conversionString: string = '';

  populateCoins() {
    return this.coindb.setCurrencyData();
  }

  populateFiat() {
    return this.coindb.setFiatData();
  }

  convertForm = new FormGroup({
    amountToConvert: new FormControl(1),
    convertFrom: new FormControl('Bitcoin - BTC'),
    convertTo: new FormControl('United States Dollar - USD'),
  });

  onSubmit() {
    const fromId = this.getCoinId(this.convertForm.value.convertFrom);
    const toId = this.getCoinId(this.convertForm.value.convertTo);
    this.convertData = {
      amountToConvert: this.convertForm.value.amountToConvert,
      convertFrom: fromId,
      convertTo: toId,
    };
    this.convertCurrency();
  }

  getCoinId(coinFullName: string): string {
    const coinValues = this.mainCurrencyFullObjects.find(
      (val: any) => val.nameSymbol === coinFullName
    );
    if (coinValues) {
      return coinValues.id.toString();
    }
    return '0';
  }

  convertCurrency(): void {
    const params = {
      amount: this.convertData.amountToConvert,
      id: this.convertData.convertFrom,
      convert_id: this.convertData.convertTo,
    };

    this.apiService
      .getApiData(this.convertEndpoint, params)
      .subscribe((res) => {
        this.conversionResult = { ...res };
        this.conversionString = this.setConversionString(res.quote);
      });
  }

  setConversionString(quote: any): string {
    const price = formatCurrency(
      quote[`${this.convertData.convertTo}`].price,
      'en',
      '$',
      'USD'
    );
    return `
      ${this.convertForm.value.amountToConvert} ${this.convertForm.value.convertFrom} = ${price} ${this.convertForm.value.convertTo};
    `;
  }

  ngOnInit(): void {
    this.allCoins = this.populateCoins();
    this.allFiat = this.populateFiat();
  }

  ngAfterContentInit(): void {
    const coinFilters = this.allCoins.filter((value: Coin) =>
      this.mainCurrencyArray.includes(value.nameSymbol)
    );
    const fiatFilters = this.allFiat.filter((value: Coin) =>
      this.mainCurrencyArray.includes(value.nameSymbol)
    );
    this.mainCurrencyFullObjects = [...coinFilters, ...fiatFilters];
  }
}
