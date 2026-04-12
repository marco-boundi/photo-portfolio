import { Component, signal } from '@angular/core';
import { ImageWithFallbackComponent } from './components/figma/image-with-fallback';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImageWithFallbackComponent, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('photo-press-kit');

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
}
