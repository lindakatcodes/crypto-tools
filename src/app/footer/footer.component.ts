import { Component, OnInit } from '@angular/core';
import { KeyDataService } from '../key-data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private keyService: KeyDataService) {}
  
  data: any;

  setKeyData(): void {
    this.keyService.getKeyData().subscribe(res => this.data = {...res})
  }

  ngOnInit(): void {
    this.setKeyData();
  }
}
