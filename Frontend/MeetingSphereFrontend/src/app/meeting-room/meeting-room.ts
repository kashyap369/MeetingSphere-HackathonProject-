import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bot, ChartAreaIcon, CircleDot, ClipboardClock, Cpu, House, Lightbulb, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, MessageSquare, Mic, Notebook, NotebookIcon, Phone, User, Users, Video } from 'lucide-angular';

@Component({
  selector: 'app-meeting-room',
  standalone: true,
  imports: [CommonModule,LucideAngularModule],
  templateUrl: './meeting-room.html',
  styleUrls: ['./meeting-room.css'],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({ User, Video,Users,CircleDot, House, Notebook, Bot, ClipboardClock, Lightbulb, Cpu, NotebookIcon, MessageSquare,Phone,Mic })
    }
  ]
})
export class MeetingRoom {

  // Sample participant data for display
  participants = [
    { name: 'You', status: 'speaking' },
    { name: 'Sarah', status: 'active' },
    { name: 'John', status: 'active' },
    { name: 'David', status: 'muted' },
  ];

  // Future placeholders for meeting logic
  isMuted = false;
  cameraOn = true;
  recording = true;

  toggleMic(): void {
    this.isMuted = !this.isMuted;
    console.log(this.isMuted ? 'Microphone muted' : 'Microphone unmuted');
  }

  toggleCamera(): void {
    this.cameraOn = !this.cameraOn;
    console.log(this.cameraOn ? 'Camera turned on' : 'Camera turned off');
  }

  endMeeting(): void {
    console.log('Meeting ended');
    // Add navigation logic here later (e.g., go back to home or summary)
  }
}
