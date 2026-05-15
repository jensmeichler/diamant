import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {ViewService} from "src/app/services/view.service";
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, AsyncPipe, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly narrow$ = inject(ViewService).narrow$;
}
