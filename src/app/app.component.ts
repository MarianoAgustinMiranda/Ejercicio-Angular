import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  items: Item[] = [
    { name: 'Mouse', cost: '$2000' },
    { name: 'Teclado', cost: '$5000' },
    { name: 'Pad XL', cost: '$3000' }
  ];

  showList = true;

  toggleList() {
    this.showList = !this.showList;
  }
}

export interface Item {
  name: string;
  cost: string;
}