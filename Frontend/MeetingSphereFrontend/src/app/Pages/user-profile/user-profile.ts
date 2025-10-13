import { Component } from '@angular/core';
import { Calendar, Clock, Download, Hourglass, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Share2, Users } from 'lucide-angular';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
  providers:[
    {
      provide:LUCIDE_ICONS,
      multi:true,
      useValue:new LucideIconProvider({Calendar,Clock,Users,Hourglass,Download,Share2})
    }
  ]
})
export class UserProfile {

}
