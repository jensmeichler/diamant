import {Component, OnInit} from '@angular/core';
import {InfoBoxCouponComponent} from "src/app/components/info-box-coupon/info-box-coupon.component";

@Component({
  selector: 'app-treatments-wellness',
  standalone: true,
  imports: [InfoBoxCouponComponent],
  templateUrl: './treatments-wellness.component.html',
  styleUrls: ['./treatments-wellness.component.scss']
})
export class TreatmentsWellnessComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
  }
}
