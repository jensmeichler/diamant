import {inject, Injectable} from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly defaults = {
    title: 'Diamant Kosmetik - Schönheit neu erleben',
    description: 'Ihr freundliches Kosmetikstudio in Braunschweig mit der besten Kosmetik und professioneller Gesichtspflege individuell abgestimmt für ihren Hauttyp.',
  }

  private readonly meta = inject(Meta);

  resetMeta(): void {
    if (this.meta.getTag('name="title"')?.content === this.defaults.title) {
      return;
    }

    this.updateMeta(this.defaults);
  }

  updateMeta(config: {
    title: string;
    description: string;
  }): void {
    this.meta.updateTag({name: 'title', content: config.title});
    this.meta.updateTag({name: 'description', content: config.description});
  }
}
