import {Component, OnInit} from '@angular/core';
import {InfoBoxCouponComponent} from "src/app/components/info-box-coupon/info-box-coupon.component";
import {AiTranslatePipe} from "src/app/pipes/ai-translate.pipe";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-treatments-massage',
  standalone: true,
  imports: [InfoBoxCouponComponent, AiTranslatePipe, AsyncPipe],
  templateUrl: './treatments-massage.component.html',
  styleUrls: ['./treatments-massage.component.scss']
})
export class TreatmentsMassageComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
  }
}
