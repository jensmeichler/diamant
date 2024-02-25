import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {SeoService} from "src/app/services/seo.service";
import {ViewService} from "src/app/services/view.service";
import {ImgComponent} from "src/app/components/img/img.component";
import {TreatmentsExplanationsComponent} from "src/app/components/treatments-explanations/treatments-explanations.component";
import {RatingComponent} from "src/app/components/rating/rating.component";
import {GalleryComponent} from "src/app/components/gallery/gallery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    AsyncPipe,
    NgClass,
    ImgComponent,
    TreatmentsExplanationsComponent,
    RatingComponent,
    GalleryComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);
  mobile$ = inject(ViewService).mobile$;
  readMore = false;

  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
    this.seo.resetMeta();
  }
}
