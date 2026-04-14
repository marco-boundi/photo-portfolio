import { Component, signal } from '@angular/core';
import {
  LucideAngularModule,
  Mail,
  Phone,
  Globe,
  MapPin,
  Award,
  Camera,
  Users,
  Briefcase
} from 'lucide-angular';
import { NgOptimizedImage } from '@angular/common';
import { LightboxComponent } from './components/lightbox/lightbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LucideAngularModule, NgOptimizedImage, LightboxComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly icons = {
    Mail,
    Phone,
    Globe,
    MapPin,
    Award,
    Camera,
    Users,
    Briefcase
  };

  selectedImage = signal<string | null>(null);

  openLightbox(url: string) {
    this.selectedImage.set(url);
  }

  closeLightbox() {
    this.selectedImage.set(null);
  }
}
