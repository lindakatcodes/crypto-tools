import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private apiService: ApiDataService) {}

  data: any;
  keyEndpoint: string = '/v1/key/info';

  setApiData(): void {
    this.apiService
      .getApiData(this.keyEndpoint)
      .subscribe((res) => (this.data = { ...res }));
  }

  ngOnInit(): void {
    this.setApiData();
  }
}
