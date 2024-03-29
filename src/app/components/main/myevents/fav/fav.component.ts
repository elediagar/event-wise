import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event, EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {

  eventsFav: Event[];
  eventsFavExpired: Event[];

  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  async ngOnInit() {
    const response = await this.eventService.getEventsFav();
    if (!response['error']) {
      this.eventsFav = response
    }
    const eventsExpired = await this.eventService.getEventsFavExpired();
    if (!eventsExpired['error']) {
      this.eventsFavExpired = eventsExpired
    }
  }

  async deleteFav(pId) {
    await this.eventService.deleteEventsFav(pId);
    const response = await this.eventService.getEventsFav();
    const eventsExpired = await this.eventService.getEventsFavExpired();
    if (!response['error'] || !eventsExpired['error']) {
      this.eventsFav = response
      this.eventsFavExpired = eventsExpired
    }
  }

  onClickDetails(pId) {
    this.router.navigate(['event-description', pId])
  }


}
