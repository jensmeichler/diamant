import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "src/app/components/header/header.component";
import {FooterComponent} from "src/app/components/footer/footer.component";
import {ScrollTopButtonComponent} from "src/app/components/scroll-top-button/scroll-top-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    RouterLink,
    FooterComponent,
    ScrollTopButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
