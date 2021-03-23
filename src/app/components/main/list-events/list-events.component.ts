import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event, EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  arrEvents: Event[];

  constructor(
    private eventService: EventService,
    private router: Router
  ) {

  }

  async ngOnInit() {
    this.arrEvents = await this.eventService.getAll();
  }

  getEvent(pId) {
    this.router.navigate(['event-description', pId]);
  }

}


