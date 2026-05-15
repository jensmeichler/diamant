import {Component} from '@angular/core';
import {fromEvent, map, startWith} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-scroll-top-button',
  imports: [AsyncPipe],
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.scss']
})
export class ScrollTopButtonComponent {
  protected readonly scrollPossible$ = fromEvent(window, 'scroll').pipe(
    map(() => window.scrollY >= 32),
    startWith(false),
  );

  scrollToTop(): void {
    window.scrollTo({top: 0});
  }
}
