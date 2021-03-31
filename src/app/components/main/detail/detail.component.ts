import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event, EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  event: Event;
  eventAttend: Event;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.event = await this.eventService.getEventAttendById(params.event_id);
      console.log(this.event);

    })
  }

  async onClickAttend(eventId) {
    console.log(this.event.attend);
    if (!this.event.attend) {
      const response = await this.eventService.addEventsAttend(eventId)
    } else {
      const response = await this.eventService.deleteEventsAttend(eventId)
    }
    this.event.attend = !this.event.attend
  }


  onClickAccess(pId) {
    this.router.navigate(['event', pId])
  }



}


