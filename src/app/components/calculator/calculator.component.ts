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

  coins!: any;

  populateCoins() {
    return this.coindb.setCurrencyData();
  }

  convertForm = new FormGroup({
    value: new FormControl(1),
    coinOwned: new FormControl('BTC'),
    convertedTo: new FormControl('USD')
  });

  ngOnInit(): void {
    this.coins = this.populateCoins();
  }
}
