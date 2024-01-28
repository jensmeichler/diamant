import {Component, OnInit} from '@angular/core';
import {InfoBoxCouponComponent} from "src/app/components/info-box-coupon/info-box-coupon.component";

@Component({
  selector: 'app-treatments-massage',
  standalone: true,
  imports: [InfoBoxCouponComponent],
  templateUrl: './treatments-massage.component.html',
  styleUrls: ['./treatments-massage.component.scss']
})
export class TreatmentsMassageComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
  }
}
