import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "src/app/components/header/header.component";
import {FooterComponent} from "src/app/components/footer/footer.component";
import {ScrollTopButtonComponent} from "src/app/components/scroll-top-button/scroll-top-button.component";
import {BannerComponent} from "src/app/components/additional-header/banner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    RouterLink,
    FooterComponent,
    ScrollTopButtonComponent,
    BannerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  geoLink = ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPad") != -1) ||
    (navigator.platform.indexOf("iPod") != -1))
    ? "maps://maps.google.com/maps?daddr=52.261748,10.534947&amp;q=Adolfstraße+65&amp;ll="
    : "https://maps.google.com/maps?daddr=52.261748,10.534947&amp;q=Adolfstraße+65&amp;ll=";
}
