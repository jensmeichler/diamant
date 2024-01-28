import {Component, inject, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {ViewService} from "src/app/services/view.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, AsyncPipe, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input({required: true}) geoLink!: string;
  mobile$ = inject(ViewService).mobile$;
  menuOpen = false;

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
