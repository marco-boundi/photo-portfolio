import { Component, signal } from '@angular/core';
import { LightboxComponent } from '../components/lightbox/lightbox.component';
import {
  LucideAward,
  LucideBriefcase,
  LucideMail,
  LucideMapPin,
  LucidePhone,
  LucideUsers,
} from '@lucide/angular';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    LightboxComponent,
    LucideAward,
    LucideBriefcase,
    LucideMail,
    LucideMapPin,
    LucidePhone,
    LucideUsers,
    NgOptimizedImage,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  selectedImage = signal<string | null>(null);

  openLightbox(url: string) {
    this.selectedImage.set(url);
  }

  closeLightbox() {
    this.selectedImage.set(null);
  }
}
