import {Component} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: 'cards.component.html',
  styleUrls: ['cards.component.css'],
})
export class Cards {
  today: number = Date.now();
  monthTwo: number = new Date().getMonth() +1;
  thisYear: number = new Date().getFullYear();
  fullDateMonthTwo: Date = new Date(this.thisYear, this.monthTwo, 1);
  
  monthThree: number = new Date().getMonth() + 2;
  fullDateMonthThree: Date = new Date(this.thisYear, this.monthThree,1);
  constructor() { }

  ngOnInit() {
  }

}
