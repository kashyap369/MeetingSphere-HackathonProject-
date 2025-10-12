import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Bot, BrainCircuit, ClipboardClock, House, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Notebook, User, Video } from 'lucide-angular';

@Component({
  selector: 'app-main-layout',
  standalone:true,
  imports: [LucideAngularModule,RouterOutlet,RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
  providers: [
    {
      provide:LUCIDE_ICONS,
      multi:true,
      useValue: new LucideIconProvider({User,Video,House,Notebook,Bot,ClipboardClock})
    }
  ],
})
export class MainLayout {
  showNavbar = true;
}
