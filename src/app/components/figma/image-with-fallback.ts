import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-with-fallback',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img
      [src]="error() ? fallbackSrc : src"
      [alt]="alt"
      [class]="className"
      (error)="onError()"
    />
  `
})
export class ImageWithFallbackComponent {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
  @Input() className: string = '';
  @Input() fallbackSrc: string = 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800'; // Default gradient fallback

  error = signal(false);

  onError() {
    this.error.set(true);
  }
}
