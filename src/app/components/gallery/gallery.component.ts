import {Component} from '@angular/core';
import {ImgComponent} from "src/app/components/img/img.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

type SelectionDirection = 'forward' | 'backward';

interface Image {
  src: string;
  label: string;
  link?: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImgComponent, NgIf, AsyncPipe, RouterLink, TranslateModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  private images: Image[] = [
    {
      src: 'assets/img/products/products.webp',
      label: 'COMPONENTS.GALLERY.PRODUCTS',
      link: '/produkte',
      width: 1079,
      height: 801
    },
    {
      src: 'assets/img/gallery/studio-outside.webp',
      label: 'COMPONENTS.GALLERY.STUDIO',
      link: '/kontakt',
      width: 2000,
      height: 1500
    },
    {
      src: 'assets/img/gallery/waiting-room.webp',
      label: 'COMPONENTS.GALLERY.STUDIO',
      link: '/kontakt',
      width: 2000,
      height: 1500
    },
    {
      src: 'assets/img/contact/studio.webp',
      label: 'COMPONENTS.GALLERY.STUDIO',
      link: '/kontakt',
      width: 1599,
      height: 899
    },
  ];

  protected touched = false;
  protected readonly reverse$ = new BehaviorSubject(false);
  protected readonly selection$: BehaviorSubject<Image | null> = new BehaviorSubject<Image | null>(this.images[0]);

  next(): void {
    const selection = this.selection$.getValue();
    if (selection === null) {
      return;
    }

    this.select(this.images[this.getNextIndex(selection)], 'forward');
  }

  prev(): void {
    const selection = this.selection$.getValue();
    if (selection === null) {
      return;
    }

    this.select(this.images[this.getPrevIndex(selection)], 'backward');
  }

  private getNextIndex(relativeTo: Image): number {
    const selectionIndex = this.images.indexOf(relativeTo);
    return selectionIndex === this.images.length - 1 ? 0 : selectionIndex + 1;
  }

  private getPrevIndex(relativeTo: Image): number {
    const selectionIndex = this.images.indexOf(relativeTo);
    return selectionIndex === 0 ? this.images.length - 1 : selectionIndex - 1;
  }

  private select(image: Image, direction: SelectionDirection): void {
    this.touched = true;
    this.reverse$.next(direction === 'backward');
    this.selection$.next(null);
    setTimeout(() => {
      this.selection$.next(image);
      this.preloadImage(direction === 'forward'
        ? this.images[this.getNextIndex(image)]
        : this.images[this.getPrevIndex(image)]
      );
    });
  }

  private preloadImage(target: Image): void {
    const nextImage = new Image();
    nextImage.src = target.src;
  }
}
