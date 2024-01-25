import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {fromEvent, map, startWith} from "rxjs";
import {SeoService} from "src/app/services/seo.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe, NgClass],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  seo = inject(SeoService);

  $mobile = fromEvent(window, 'resize')
    .pipe(startWith(undefined), map(() => window.innerWidth < 650));

  readMore = false;

  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
    this.seo.resetMeta();
  }
}
