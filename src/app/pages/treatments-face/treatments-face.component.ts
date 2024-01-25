import {Component, OnInit} from '@angular/core';
import {InfoBoxCouponComponent} from "src/app/components/info-box-coupon/info-box-coupon.component";

@Component({
  selector: 'app-treatments-face',
  standalone: true,
  imports: [
    InfoBoxCouponComponent
  ],
  templateUrl: './treatments-face.component.html',
  styleUrls: ['./treatments-face.component.scss']
})
export class TreatmentsFaceComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
  }
}
