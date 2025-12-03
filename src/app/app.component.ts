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
  protected readonly geoLink = ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPad") != -1) ||
    (navigator.platform.indexOf("iPod") != -1))
    ? "maps://maps.google.com/maps?daddr=52.268585,10.456814,19z&amp;q=Kuhtrift+2&amp;ll="
    : "https://maps.app.goo.gl/d3J5UjqgrGeL3zia8";

  constructor(public translate: TranslateService) {
    translate.addLangs(['de', 'ru']);
    translate.setDefaultLang('de');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/ru|ua/) ? 'ru' : 'de');
  }
}
