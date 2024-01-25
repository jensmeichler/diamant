import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-treatments-wellness',
  standalone: true,
  imports: [],
  templateUrl: './treatments-wellness.component.html',
  styleUrls: ['./treatments-wellness.component.scss']
})
export class TreatmentsWellnessComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
  }
}
