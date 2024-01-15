import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "src/app/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  footerHtml = `
    Impressum:<br>
    Marina Gruszka, Adolfstraße 65, 38102 Braunschweig<br>
    E-Mail: marina@diamant-kosmetikstudio.de<br>
    Kosmetikstudio Diamant Fotos: istockphoto.com
  `;
}
