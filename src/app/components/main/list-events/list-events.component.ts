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
  arrEventsFav: Event[];
  events$: Observable<Event[]>;

  constructor(
    private eventService: EventService,
    private router: Router,

  ) {

  }

  async ngOnInit() {
    this.arrEvents = await this.eventService.getAll();
    this.arrEventsFav = (await this.eventService.getEventsFav()) || [];
    for (let event of this.arrEvents) {
      event.fav = this.arrEventsFav.some(e => e.id === event.id)
    }
    console.log(this.arrEvents);



  }



}


