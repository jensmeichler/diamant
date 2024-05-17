import {Component, OnInit} from '@angular/core';
import {InfoBoxCouponComponent} from "src/app/components/info-box-coupon/info-box-coupon.component";
import {AiTranslatePipe} from "src/app/pipes/ai-translate.pipe";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-treatments-wellness',
  standalone: true,
  imports: [InfoBoxCouponComponent, AiTranslatePipe, AsyncPipe],
  templateUrl: './treatments-wellness.component.html',
  styleUrls: ['./treatments-wellness.component.scss']
})
export class TreatmentsWellnessComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
  }
}
