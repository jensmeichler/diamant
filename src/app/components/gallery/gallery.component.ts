import {Component} from '@angular/core';
import {ImgComponent} from "src/app/components/img/img.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {RouterLink} from "@angular/router";

interface Image {
  src: string;
  alt: string;
  link?: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImgComponent, NgIf, AsyncPipe, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  private images: Image[] = [
    {
      src: 'assets/img/contact/studio.webp',
      alt: 'Unser Studio',
      link: '/kontakt',
      width: 1599,
      height: 899
    },
    {
      src: 'assets/img/products/products.webp',
      alt: 'Unsere Produkte',
      link: '/produkte',
      width: 1079,
      height: 801
    },
  ];

  touched = false;
  reverse$ = new BehaviorSubject(false);
  selection$: BehaviorSubject<Image | null> = new BehaviorSubject<Image | null>(this.images[0]);

  next(): void {
    const selection = this.selection$.getValue();
    if (selection === null) {
      return;
    }

    const selectionIndex = this.images.indexOf(selection);
    if (selectionIndex === this.images.length - 1) {
      this.select(this.images[0]);
      return;
    }

    this.select(this.images[selectionIndex + 1]);
  }

  prev(): void {
    const selection = this.selection$.getValue();
    if (selection === null) {
      return;
    }

    const selectionIndex = this.images.indexOf(selection);
    if (selectionIndex === 0) {
      this.select(this.images[this.images.length - 1], true);
      return;
    }

    this.select(this.images[selectionIndex - 1], true);
  }

  private select(image: Image, backwardsAnimation = false): void {
    this.touched = true;
    this.reverse$.next(backwardsAnimation);
    this.selection$.next(null);
    setTimeout(() => this.selection$.next(image));
  }
}
