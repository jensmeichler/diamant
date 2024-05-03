import {Component, inject, OnInit} from '@angular/core';
import {SeoService} from "src/app/services/seo.service";
import {ImgComponent} from "src/app/components/img/img.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ImgComponent, TranslateModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
    this.seo.updateMeta({
      title: 'Produkte',
      description: 'Kosmetikstudio Diamant bietet anti aging serum und Anti-Age Kosmetikprodukte. Wir arbeiten unter Anderem mit Produkten von Artistry, Beauty Hills und cNc',
    });
  }
}
