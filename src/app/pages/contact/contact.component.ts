import {Component, inject, OnInit} from '@angular/core';
import {MapComponent} from "src/app/components/map/map.component";
import {SeoService} from "src/app/services/seo.service";
import {ImgComponent} from "src/app/components/img/img.component";
import {RatingComponent} from "src/app/components/rating/rating.component";
import {TreatmentsExplanationsComponent} from "src/app/components/treatments-explanations/treatments-explanations.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {ViewService} from "src/app/services/view.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MapComponent, ImgComponent, RatingComponent, TreatmentsExplanationsComponent, AsyncPipe, NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  seo = inject(SeoService);
  mobile$ = inject(ViewService).mobile$;

  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
    this.seo.updateMeta({
      title: 'Kontakt',
      description: 'Kosmetikstudio Diamant, Braunschweig, Adolfstr. 65, Terminvereinbarung: 017676893292',
    });
  }
}
