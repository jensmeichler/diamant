import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {fromEvent, map, startWith} from "rxjs";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, AsyncPipe, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen = false;
  geoLink = ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPad") != -1) ||
    (navigator.platform.indexOf("iPod") != -1))
    ? "maps://maps.google.com/maps?daddr=52.261748,10.534947&amp;q=Adolfstraße+65&amp;ll="
    : "https://maps.google.com/maps?daddr=52.261748,10.534947&amp;q=Adolfstraße+65&amp;ll=";
  $mobile = fromEvent(window, 'resize')
    .pipe(startWith(undefined), map(() => window.innerWidth < 650));

  toggleMenu(): void {
    if (!this.menuOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  private openMenu = (): void => {
    this.menuOpen = true;
    setTimeout(() =>
      document.addEventListener('click', this.closeMenu)
    );
  }

  private closeMenu = () => {
    this.menuOpen = false;
    setTimeout(() =>
      document.removeEventListener('click', this.closeMenu)
    );
  }
}
