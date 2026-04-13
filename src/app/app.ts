import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LucideAngularModule, NgOptimizedImage],
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
}
