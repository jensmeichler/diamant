import {Component, OnInit} from '@angular/core';
import {MapComponent} from "src/app/components/map/map.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
  }
}
