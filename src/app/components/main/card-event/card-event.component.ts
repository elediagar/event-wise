import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event, EventService } from 'src/app/services/event.service';



@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss']
})




export class CardEventComponent implements OnInit {


  @Input() evento: Event;

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  }

  getEvent(pId) {
    this.router.navigate(['event-description', pId]);
  }

  async onClickFav(pId) {
    console.log(this.evento.fav);

    if (!this.evento.fav) {
      const response = await this.eventService.addEventsFav(pId)
    } else {
      const response = await this.eventService.deleteEventsFav(pId)
    }
    this.evento.fav = !this.evento.fav
  }







}
