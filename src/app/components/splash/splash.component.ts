import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [],
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      const self = document.querySelector('app-splash');
      self?.parentElement?.removeChild(self);
    }, 3000);
  }
}
