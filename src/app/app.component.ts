import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "src/app/components/header/header.component";
import {FooterComponent} from "src/app/components/footer/footer.component";
import {ScrollTopButtonComponent} from "src/app/components/scroll-top-button/scroll-top-button.component";
import {BannerComponent} from "src/app/components/additional-header/banner.component";
import {TranslateService} from '@ngx-translate/core';

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
  protected readonly geoLink = /iPhone|iPad|iPod/i.test(navigator.userAgent)
    ? "https://maps.apple.com/?daddr=Kuhtrift+2,+38116+Braunschweig"
    : "https://www.google.com/maps/dir/?api=1&destination=Kuhtrift+2,+38116+Braunschweig";

  constructor(public translate: TranslateService) {
    translate.addLangs(['de', 'ru']);
    translate.setDefaultLang('de');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/ru|ua/) ? 'ru' : 'de');
  }
}
