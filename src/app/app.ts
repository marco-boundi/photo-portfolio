import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import {
  LucideMail,
  LucidePhone,
  LucideMapPin,
  LucideAward,
  LucideUsers,
  LucideBriefcase,
} from '@lucide/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgOptimizedImage,
    LightboxComponent,
    LucideBriefcase,
    LucideUsers,
    LucideAward,
    LucideMail,
    LucidePhone,
    LucideMapPin,
  ],
  providers: [],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  selectedImage = signal<string | null>(null);

  openLightbox(url: string) {
    this.selectedImage.set(url);
  }

  closeLightbox() {
    this.selectedImage.set(null);
  }
}
