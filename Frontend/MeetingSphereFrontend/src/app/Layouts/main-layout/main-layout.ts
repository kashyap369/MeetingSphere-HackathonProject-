import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

import { RouterModule, RouterOutlet } from '@angular/router';
import { Bot, BrainCircuit, ClipboardClock, House, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Notebook, User, Video } from 'lucide-angular';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [LucideAngularModule, RouterOutlet, RouterModule, FormsModule,],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({ User, Video, House, Notebook, Bot, ClipboardClock })
    }
  ],
})
export class MainLayout {
  constructor(private router: Router) {}
  showNavbar = true;

  @ViewChild('meetingModal') meetingModal!: ElementRef<HTMLDivElement>;

  meeting = {
    topic: '',
    type: 'instant',
    date: '',
    time: '',
    duration: '30 Minutes',
    password: '',
    waitingRoom: false,
    muteParticipants: false,
    hostVideo: true,
    participantVideo: false
  };

  showScheduleFields(): boolean {
    return this.meeting.type === 'scheduled';
  }

  openModal() {
    const modal = new window.bootstrap.Modal(this.meetingModal.nativeElement);
    modal.show();
  }

  closeModal() {
    const modal = window.bootstrap.Modal.getInstance(this.meetingModal.nativeElement);
    modal?.hide();
  }

  createMeeting() {
    if (!this.meeting.topic.trim()) {
      alert('Please enter a meeting topic.');
      return;
    }

    const meetingId = Math.floor(100000 + Math.random() * 900000);
    const meetingLink = `https://yourapp.meet/${meetingId}`;

    alert(`✅ Meeting Created!\nTopic: ${this.meeting.topic}\nLink: ${meetingLink}`);
    this.router.navigate(['/meeting', meetingId]);


    this.closeModal();
    this.resetForm();
  }

  private resetForm() {
    this.meeting = {
      topic: '',
      type: 'instant',
      date: '',
      time: '',
      duration: '30 Minutes',
      password: '',
      waitingRoom: false,
      muteParticipants: false,
      hostVideo: true,
      participantVideo: false
    };
  }

  @ViewChild('joinMeetingModal') joinMeetingModal!: ElementRef<HTMLDivElement>;

  joinData = {
    meetingId: '',
    participantName: '',
    password: '',
    muteAudio: false,
    turnOffVideo: false
  };

  openJoinModal() {
    const modal = new bootstrap.Modal(this.joinMeetingModal.nativeElement);
    modal.show();
  }

  closeJoinModal() {
    const modal = bootstrap.Modal.getInstance(this.joinMeetingModal.nativeElement);
    modal?.hide();
  }

  joinMeeting() {
    if (!this.joinData.meetingId.trim() || !this.joinData.participantName.trim()) {
      alert('Please fill in required fields before joining.');
      return;
    }

    // Simulated join logic for now
    alert(`Joining meeting as ${this.joinData.participantName}`);
    this.closeJoinModal();
  }



}
