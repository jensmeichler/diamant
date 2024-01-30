import {Component, Input, OnInit} from '@angular/core';
import {InfoBoxCouponComponent} from "src/app/components/info-box-coupon/info-box-coupon.component";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

type Treatment = 'diamant-microdermabrasion' | 'micro-needling' | 'lymphdrainage' | 'mesoporation';

@Component({
  selector: 'app-treatments-special',
  standalone: true,
  imports: [InfoBoxCouponComponent, NgOptimizedImage, RouterLink],
  templateUrl: './treatments-special.component.html',
  styleUrls: ['./treatments-special.component.scss']
})
export class TreatmentsSpecialComponent implements OnInit {
  @Input({alias: 'behandlung'}) treatment?: Treatment;

  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});

    if (this.treatment !== undefined) {
      const top = document.getElementById(this.treatment)?.offsetTop;
      if (top) {
        window.scroll({top: top - 100});
      }
    }
  }
}
