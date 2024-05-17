import {Component} from '@angular/core';
import {AiTranslatePipe} from "src/app/pipes/ai-translate.pipe";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-info-box-coupon',
  standalone: true,
  imports: [AiTranslatePipe, AsyncPipe],
  templateUrl: './info-box-coupon.component.html',
  styleUrls: ['./info-box-coupon.component.scss']
})
export class InfoBoxCouponComponent {
}
