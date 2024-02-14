import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgIf} from "@angular/common";
import {ViewService} from "src/app/services/view.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgIf],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  narrow$ = inject(ViewService).narrow$;

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
