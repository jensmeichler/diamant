import {Component} from '@angular/core';


@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  consentGiven = localStorage.getItem('consent') === 'true';

  giveConsent(): void {
    this.consentGiven = true;
    localStorage.setItem('consent', 'true');
  }
}
