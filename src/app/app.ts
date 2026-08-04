import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { provideLucideIcons, LucideMail, LucidePhone, LucideGlobe, LucideMapPin, LucideAward, LucideCamera, LucideUsers, LucideBriefcase } from '@lucide/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, LightboxComponent, LucideBriefcase, LucideUsers, LucideAward, LucideMail, LucidePhone, LucideMapPin],
  providers: [
    provideLucideIcons(
      LucideMail,
      LucidePhone,
      LucideGlobe,
      LucideMapPin,
      LucideAward,
      LucideCamera,
      LucideUsers,
      LucideBriefcase
    ),
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly icons = {
    LucideMail,
    LucidePhone,
    LucideGlobe,
    LucideMapPin,
    LucideAward,
    LucideCamera,
    LucideUsers,
    LucideBriefcase
  };

  selectedImage = signal<string | null>(null);

  openLightbox(url: string) {
    this.selectedImage.set(url);
  }

  closeLightbox() {
    this.selectedImage.set(null);
  }
}
