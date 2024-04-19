import {Component} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NgIf],
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
