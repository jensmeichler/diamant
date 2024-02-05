import {Component, Input} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input({required: true}) src!: string;
  @Input() alt: string = '';
  @Input({required: true}) width!: number;
  @Input({required: true}) height!: number;
  @Input() hover = false;
  @Input() priority: number | null = null;
  @Input() objectPosition: 'top' | 'center' | 'bottom' = 'center';
}
