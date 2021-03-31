import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event, EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.scss']
})
export class EventHeaderComponent implements OnInit {

  event: Event;

  constructor(
    private router: Router,
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.event = await this.eventService.getEventHostById(params.event_id);
      console.log(this.event);
    });
  }

  isCollapse = true;   // guardamos el valor
  toggleState() { // manejador del evento
    this.isCollapse = !this.isCollapse
  }

  onClickHome(pUrl) {
    this.router.navigate([pUrl])
  }
  onClickBack() {
    this.router.navigate(['myevents', 'host'])
  }
  onClickEdit(pId) {
    this.router.navigate(['myevents', 'edit', pId])
  }

}
