import {Component, inject, OnInit} from '@angular/core';
import {SeoService} from "src/app/services/seo.service";

@Component({
  selector: 'app-consulting',
  standalone: true,
  imports: [],
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {
  seo = inject(SeoService);

  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
    this.seo.updateMeta({
      title: 'Beratung',
      description: 'Kosmetikstudio Diamant in Braunschweig bietet Wellness und reverse aging Services eines modernen Kosmetikstudios: Von der Gesichtsbehandlung über Permanent Make-up bis zu Massagen',
    });
  }
}
