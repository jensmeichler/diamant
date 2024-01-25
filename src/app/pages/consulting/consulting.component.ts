import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-consulting',
  standalone: true,
  imports: [],
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({top: 0, behavior: 'instant'});
  }
}
