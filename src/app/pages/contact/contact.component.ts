import {Component, inject, OnInit} from '@angular/core';
import {MapComponent} from "src/app/components/map/map.component";
import {SeoService} from "src/app/services/seo.service";
import {ImgComponent} from "src/app/components/img/img.component";
import {RatingComponent} from "src/app/components/rating/rating.component";
import {TreatmentsExplanationsComponent} from "src/app/pages/treatments-explanations/treatments-explanations.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MapComponent, ImgComponent, RatingComponent, TreatmentsExplanationsComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  seo = inject(SeoService);

  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
    this.seo.updateMeta({
      title: 'Kontakt',
      description: 'Kosmetikstudio Diamant, Braunschweig, Adolfstr. 65, Terminvereinbarung: 017676893292',
    });
  }
}
