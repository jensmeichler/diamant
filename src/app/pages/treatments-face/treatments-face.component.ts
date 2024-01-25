import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-treatments-face',
  standalone: true,
  imports: [],
  templateUrl: './treatments-face.component.html',
  styleUrls: ['./treatments-face.component.scss']
})
export class TreatmentsFaceComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
  }
}
