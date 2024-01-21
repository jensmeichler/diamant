import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {fromEvent, map, startWith} from "rxjs";

@Component({
  selector: 'app-scroll-top-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.scss']
})
export class ScrollTopButtonComponent {
  scrollPossible$ = fromEvent(window, 'scroll').pipe(
    map(() => window.scrollY > 20),
    startWith(false),
  );

  scrollToTop(): void {
    window.scrollTo({top: 0});
  }
}
