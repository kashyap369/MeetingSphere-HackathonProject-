import { Component } from '@angular/core';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, User } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers:[
    {
      provide:LUCIDE_ICONS,
      multi:true,
      useValue: new LucideIconProvider({User})
    }
  ]
})
export class Home {

}
