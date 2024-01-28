import {Component} from '@angular/core';
import {fromEvent, map, startWith} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-scroll-top-button',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.scss']
})
export class ScrollTopButtonComponent {
  scrollPossible$ = fromEvent(window, 'scroll').pipe(
    map(() => window.scrollY >= 32),
    startWith(false),
  );

  scrollToTop(): void {
    window.scrollTo({top: 0});
  }
}
