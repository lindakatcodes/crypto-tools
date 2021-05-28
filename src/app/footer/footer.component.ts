import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  data: Object = this.fetchKeyData();

  async fetchKeyData() {
    return await fetch('./../../../netlify/functions/getKeyData').then(res => res.json)
      .then(result => result)
      .catch(err => console.error(err));
  }

}
