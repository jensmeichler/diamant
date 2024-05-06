import {Component, OnInit} from '@angular/core';
import {InfoBoxCouponComponent} from "src/app/components/info-box-coupon/info-box-coupon.component";
import {ImgComponent} from "src/app/components/img/img.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-treatments-face',
  standalone: true,
  imports: [InfoBoxCouponComponent, ImgComponent, TranslateModule],
  templateUrl: './treatments-face.component.html',
  styleUrls: ['./treatments-face.component.scss']
})
export class TreatmentsFaceComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
  }
}
