import {Component, inject, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {ViewService} from "src/app/services/view.service";
import {AiTranslatePipe} from "src/app/pipes/ai-translate.pipe";
import {AiTranslateService} from "src/app/services/ai-translate.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, AsyncPipe, NgClass, AiTranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input({required: true}) geoLink!: string;
  protected readonly mobile$ = inject(ViewService).mobile$;
  protected menuOpen = false;
  protected readonly aiTranslate = inject(AiTranslateService);

  switchLanguage(lang: 'de' | 'ua'): void {
    this.aiTranslate.use(lang);
  }

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
