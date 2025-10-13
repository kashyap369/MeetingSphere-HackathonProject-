import { Component } from '@angular/core';
import { Calendar, Clock, Download, Hourglass, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Share2, Users } from 'lucide-angular';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './history.html',
  styleUrl: './history.css',
  providers:[
    {
      provide:LUCIDE_ICONS,
      multi:true,
      useValue:new LucideIconProvider({Calendar,Clock,Users,Hourglass,Download,Share2})
    }
  ]
})
export class History {

}
