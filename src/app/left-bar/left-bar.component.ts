import { Component } from '@angular/core';
import { faDashboard,faLocation,faShop,faBox,faMoneyBill,faChartBar,faContactBook,faHand } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent {
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;


}
