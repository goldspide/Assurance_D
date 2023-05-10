import { Component } from '@angular/core';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-option-widget',
  templateUrl: './option-widget.component.html',
  styleUrls: ['./option-widget.component.scss']
})
export class OptionWidgetComponent {

  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

}
