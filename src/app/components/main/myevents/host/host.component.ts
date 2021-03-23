import { Component, OnInit } from '@angular/core';
import { Event, EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  eventsHost: Event[];

  constructor(
    private eventService: EventService
  ) {

  }

  async ngOnInit() {
    this.eventsHost = await this.eventService.getEventsHost();
  }



}
