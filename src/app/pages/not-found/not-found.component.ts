import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AiTranslatePipe} from "src/app/pipes/ai-translate.pipe";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, AiTranslatePipe, AsyncPipe],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  back(): void {
    window.history.back();
  }
}
