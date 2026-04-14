import { Component, EventEmitter, Input, Output, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
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
        <lucide-icon [name]="icons.X" class="w-8 h-8"></lucide-icon>
      </button>

      <!-- Image container -->
      <div
        class="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center"
        (click)="$event.stopPropagation()"
      >
        <img
          [src]="imageUrl()!"
          class="max-w-full max-h-[90vh] object-contain rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] select-none pointer-events-none"
          alt="Enlarged view"
        />
      </div>
    </div>
    }
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class LightboxComponent {
  imageUrl = signal<string | null>(null);

  @Input() set src(value: string | null) {
    this.imageUrl.set(value);
  }

  @Output() closed = new EventEmitter<void>();

  readonly icons = { X };

  close() {
    this.imageUrl.set(null);
    this.closed.emit();
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.close();
  }
}
