import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgIf} from "@angular/common";
import {ViewService} from "src/app/services/view.service";
import {AiTranslatePipe} from "src/app/pipes/ai-translate.pipe";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgIf, AiTranslatePipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly narrow$ = inject(ViewService).narrow$;
}
