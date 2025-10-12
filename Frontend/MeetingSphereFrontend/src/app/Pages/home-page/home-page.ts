import { Component } from '@angular/core';
import { Brain, BrainCircuit, Calendar, FileText, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from 'lucide-angular';

@Component({
  selector: 'app-home-page',
  standalone:true,
  imports: [LucideAngularModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  providers: [
    {
      provide:LUCIDE_ICONS,
      multi:true,
      useValue: new LucideIconProvider({Brain,Calendar,FileText})
    }
  ]
})
export class HomePage {

}
