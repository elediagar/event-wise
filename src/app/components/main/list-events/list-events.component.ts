import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event, EventService } from 'src/app/services/event.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  arrEvents: Event[];
  events$: Observable<Event[]>;

  constructor(
    private eventService: EventService,
    private router: Router,

  ) {

  }

  async ngOnInit() {
    this.arrEvents = await this.eventService.getAll();

    /*     //OBSERVABLES
        this.events$ = this.eventService.getEvents$();
        this.events$.subscribe(events => this.arrEvents = events) */
  }

  getEvent(pId) {
    this.router.navigate(['event-description', pId]);
  }

}


