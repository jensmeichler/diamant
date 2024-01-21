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
  $mobile = fromEvent(window, 'resize')
    .pipe(startWith(undefined), map(() => window.innerWidth < 650));

  toggleMenu(): void {
    if (!this.menuOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  linkClick(): void {
    window.scroll({top: 0});
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
