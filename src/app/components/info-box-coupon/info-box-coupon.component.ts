import {Component} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-info-box-coupon',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './info-box-coupon.component.html',
  styleUrls: ['./info-box-coupon.component.scss']
})
export class InfoBoxCouponComponent {
}
