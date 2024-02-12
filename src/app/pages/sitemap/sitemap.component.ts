import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {SeoService} from "src/app/services/seo.service";

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {
  seo = inject(SeoService);

  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
    this.seo.resetMeta();
  }
}
