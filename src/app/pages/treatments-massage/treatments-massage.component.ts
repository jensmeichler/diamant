import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-treatments-massage',
  standalone: true,
  imports: [],
  templateUrl: './treatments-massage.component.html',
  styleUrls: ['./treatments-massage.component.scss']
})
export class TreatmentsMassageComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
  }
}
