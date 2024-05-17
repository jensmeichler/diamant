import {Component} from '@angular/core';
import {InfoBoxCouponComponent} from "src/app/components/info-box-coupon/info-box-coupon.component";
import {RouterLink} from "@angular/router";
import {ImgComponent} from "src/app/components/img/img.component";
import {AiTranslatePipe} from "src/app/pipes/ai-translate.pipe";
import {AsyncPipe} from "@angular/common";

export type Treatment = 'diamant-microdermabrasion' | 'micro-needling' | 'lymphdrainage' | 'mesoporation';

@Component({
  selector: 'app-treatments-explanations',
  standalone: true,
  imports: [InfoBoxCouponComponent, RouterLink, ImgComponent, AiTranslatePipe, AsyncPipe],
  templateUrl: './treatments-explanations.component.html',
  styleUrls: ['./treatments-explanations.component.scss']
})
export class TreatmentsExplanationsComponent {
  scrollTo(treatment: Treatment): void {
    const top = document.getElementById(treatment)?.offsetTop;
    if (top) {
      window.scroll({top: top - 100});
    }
  }
}
