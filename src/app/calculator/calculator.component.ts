import { Component, OnInit } from '@angular/core';
import { CurrencyDbService } from '../currencydb.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private coindb: CurrencyDbService) { }

  coins: any;

  populateCoins() {
    this.coins = this.coindb.setCurrencyData();
  }

  ngOnInit(): void {
    this.populateCoins();
  }

}
