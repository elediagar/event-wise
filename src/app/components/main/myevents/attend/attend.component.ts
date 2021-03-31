import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event, EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-attend',
  templateUrl: './attend.component.html',
  styleUrls: ['./attend.component.scss']
})
export class AttendComponent implements OnInit {

  eventsAttend: Event[];
  eventsAttendExpired: Event[];

  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  async ngOnInit() {
    const response = await this.eventService.getEventsAttend();
    if (!response['error']) {
      this.eventsAttend = response
    }
    const eventsExpired = await this.eventService.getEventsAttendExpired();
    if (!eventsExpired['error']) {
      this.eventsAttendExpired = eventsExpired
    }
  }

  async deleteAttend(pId) {
    await this.eventService.deleteEventsAttend(pId);
    const response = await this.eventService.getEventsAttend();
    if (!response['error']) {
      this.eventsAttend = response
    }
  }

  onClickDetails(pId) {
    this.router.navigate(['event-description', pId])
  }

}
