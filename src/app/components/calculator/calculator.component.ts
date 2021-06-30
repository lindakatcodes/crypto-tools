import { Component, Input, OnInit } from '@angular/core';
import { CurrencyDbService } from '../../services/currencydb.service';
import { Coin } from '../../types/coin';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  constructor(private coindb: CurrencyDbService) { }

  allCoins!: any;
  allFiat!: any;
  mainCurrencyArray: any = ['Bitcoin - BTC', 'Ethereum - ETH', 'Polkadot - DOT', 'Chainlink - LINK', 'Cardano - ADA', 'United States Dollar - USD', 'Dogecoin - DOGE'];
  mainCurrencyFullObjects: any = [];

  populateCoins() {
    return this.coindb.setCurrencyData();
  }

  populateFiat() {
    return this.coindb.setFiatData();
  }

  convertForm = new FormGroup({
    amountToConvert: new FormControl(1),
    coinOwned: new FormControl('Bitcoin - BTC'),
    convertedTo: new FormControl('United States Dollar - USD')
  });

  ngOnInit(): void {
    this.allCoins = this.populateCoins();
    this.allFiat = this.populateFiat();
  }

  ngAfterContentInit(): void {
    const coinFilters = this.allCoins.filter((value: Coin<object>) => this.mainCurrencyArray.includes(value.symbol));
    const fiatFilters = this.allFiat.filter((value: Coin<object>) => this.mainCurrencyArray.includes(value.symbol));
    this.mainCurrencyFullObjects = [...coinFilters, ...fiatFilters];
  }
}
