import { Component, signal } from '@angular/core';
import { SHARED_IMPORTS } from '../shared/shared-imports';
import { HOME_ICON_IMPORTS } from '../shared/icons/home-icons';
import { LightboxComponent } from '../components/lightbox/lightbox.component';

@Component({
  selector: 'app-home',
  imports: [...SHARED_IMPORTS, ...HOME_ICON_IMPORTS, LightboxComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  imageLoaded = signal(false);
  selectedImage = signal<string | null>(null);

  onImageLoad(event: any) {
    this.imageLoaded.set(true);
    event.target.classList.add('loaded');
  }

  openLightbox(url: string) {
    this.selectedImage.set(url);
  }

  closeLightbox() {
    this.selectedImage.set(null);
  }
}
