import {Injectable} from '@angular/core';
import {fromEvent, map, startWith} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  mobile$ = fromEvent(window, 'resize')
    .pipe(startWith(undefined), map(() => window.innerWidth < 650));
  narrow$ = fromEvent(window, 'resize')
    .pipe(startWith(undefined), map(() => window.innerWidth < 420));
}
