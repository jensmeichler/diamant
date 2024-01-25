import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {SeoService} from "src/app/services/seo.service";

@Component({
  selector: 'app-treatments',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit {
  seo = inject(SeoService);

  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
    this.seo.updateMeta({
      title: 'Behandlungen',
      description: 'Die besten Behandlungen in Braunschweig individuell für Ihren Hauttyp. Kosmetikstudio Diamant bietet Gesichtsbehandlungen, Anti-Age Behandlungen, Permanent Make-up, Massagen und mehr',
    });
  }
}
