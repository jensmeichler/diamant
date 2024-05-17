import {Component, inject, Input, OnInit} from '@angular/core';
import {SeoService} from "src/app/services/seo.service";
import {AsyncPipe, NgIf, NgTemplateOutlet} from "@angular/common";
import {ImgComponent} from "src/app/components/img/img.component";
import {AiTranslatePipe} from "src/app/pipes/ai-translate.pipe";

@Component({
  selector: 'app-consulting',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgTemplateOutlet, ImgComponent, AiTranslatePipe],
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {
  @Input() showAdvice = false;
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
    this.seo.updateMeta({
      title: 'Beratung',
      description: 'Kosmetikstudio Diamant in Braunschweig bietet Wellness und reverse aging Services eines modernen Kosmetikstudios: Von der Gesichtsbehandlung über Permanent Make-up bis zu Massagen',
    });
  }
}
