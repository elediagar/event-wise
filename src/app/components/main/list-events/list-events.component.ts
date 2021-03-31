import { OnInit, Output, Component, ElementRef, Input, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Event, EventService } from 'src/app/services/event.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  @ViewChild('input') inputElement: ElementRef;

  @Input() placeholder = 'Enter';

  @Output() onEnter = new EventEmitter();

  searchVisible = false;

  arrEvents: Event[];
  arrEventsFav: Event[];

  events$: Observable<Event[]>;

  categories = new FormControl();
  categoryList: string[] = ['Cena o gala', 'Masterclass, curso o taller', 'Comparecencia o firma', 'Conferencia', 'Convención', 'Encuentro o evento de red', 'Feria comercial, feria de consumo o exposición', 'Festival o feria', 'Juego o competición', 'Otro', 'Proyección', 'Seminario o charla', 'Torneo', 'Visita'];

  value = 'Buscar por nombre de evento';

  constructor(
    private eventService: EventService,
    private router: Router,

  ) {

  }

  async ngOnInit() {
    //console.log(this.arrEvents);
    this.arrEvents = await this.eventService.getAll();
    this.getFav()
  }

  async onChange($event) {
    //console.log($event.value);
    if (!$event.value || $event.value == '') {
      this.arrEvents = await this.eventService.getAll();
      this.getFav()
    } else {
      this.arrEvents = await this.eventService.filterByCategory($event.value);
      this.getFav()
    }
  }

  async onEnterring(searchValue: string) {
    if (!searchValue || searchValue == '') {
      this.arrEvents = await this.eventService.getAll();
      this.getFav()
    } else {
      this.arrEvents = await this.eventService.filterByText(searchValue);
      this.getFav()
    }
  }

  async onBlurring(searchValue: string) {
    if (!searchValue || searchValue == '') {
      this.arrEvents = await this.eventService.getAll();
    }
    this.arrEvents = await this.eventService.filterByText(searchValue);
    this.getFav()
  }

  async getFav() {
    this.arrEventsFav = (await this.eventService.getEventsFav()) || [];
    for (let event of this.arrEvents) {
      event.fav = this.arrEventsFav.some(e => e.id === event.id)
    }
  }

}




