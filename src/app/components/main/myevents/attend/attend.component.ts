import { Component, OnInit } from '@angular/core';
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
    private eventService: EventService
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

}
