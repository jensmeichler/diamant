import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sitemap.component.html'
})
export class SitemapComponent {
}