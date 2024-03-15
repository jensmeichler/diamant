import {Injectable} from '@angular/core';
import {fromEvent, map, startWith} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  readonly mobile$ = fromEvent(window, 'resize')
    .pipe(startWith(undefined), map(() => window.innerWidth < 650));
  readonly narrow$ = fromEvent(window, 'resize')
    .pipe(startWith(undefined), map(() => window.innerWidth < 420));
}
