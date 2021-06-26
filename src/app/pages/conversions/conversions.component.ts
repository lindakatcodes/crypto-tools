import { Component, OnInit } from '@angular/core';
import { CurrencyDbService } from '../../services/currencydb.service';
import { Coin } from '../../types/coin';

@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.css']
})
export class ConversionsComponent implements OnInit {

  constructor(private coindb: CurrencyDbService) { }

  coins!: any;

  populateCoins() {
    return this.coindb.setCurrencyData();
  }

  ngOnInit(): void {
    this.coins = this.populateCoins();
  }

}
