import { Component, EventEmitter, Input, Output, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideX } from '@lucide/angular';
import { SHARED_IMPORTS } from '../../shared/shared-imports';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [...SHARED_IMPORTS, CommonModule, LucideX],
  template: `
    @if (imageUrl()) {
      <div
        class="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300"
        (click)="close()"
      >
        <!-- Close button -->
        <button
          class="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-all z-110 hover:scale-110 active:scale-95"
          (click)="close(); $event.stopPropagation()"
        >
          <svg lucideX></svg>
        </button>

        <!-- Image container -->
        <div
          class="relative flex items-center justify-center"
          style="width: 85vw; height: 85vh;"
          (click)="$event.stopPropagation()"
        >
          <img
            [ngSrc]="imageUrl()!"
            class="object-contain rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] select-none pointer-events-none"
            alt="Enlarged view"
            fill
            priority
          />
        </div>
      </div>
    }
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class LightboxComponent {
  imageUrl = signal<string | null>(null);

  @Input() set src(value: string | null) {
    this.imageUrl.set(value);
  }

  @Output() closed = new EventEmitter<void>();

  close() {
    this.imageUrl.set(null);
    this.closed.emit();
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.close();
  }
}
