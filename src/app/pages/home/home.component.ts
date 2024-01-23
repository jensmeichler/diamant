import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {fromEvent, map, startWith} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe, NgClass],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  $mobile = fromEvent(window, 'resize')
    .pipe(startWith(undefined), map(() => window.innerWidth < 650));

  readMore = false;
}
