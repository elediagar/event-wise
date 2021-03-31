import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event, EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  eventsHost: Event[];
  eventsHostExpired: Event[];

  constructor(
    private eventService: EventService,
    private router: Router
  ) {

  }

  async ngOnInit() {
    const events = await this.eventService.getEventsHost();
    if (!events['error']) {
      this.eventsHost = events
    }
    const eventsExpired = await this.eventService.getEventsHostExpired();
    if (!eventsExpired['error']) {
      this.eventsHostExpired = eventsExpired
    }
  }

  async onClickDelete(pId) {
    Swal.fire({
      title: '¿Estas seguro de que quieres eliminar el evento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3ec9cc',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await this.eventService.changeStatus(pId);
        this.eventsHost = await this.eventService.getEventsHost();
        this.eventsHostExpired = await this.eventService.getEventsHostExpired();
        Swal.fire('Articulo borrado')
      }
    })
  }

  onClickEdit(pId) {
    this.router.navigate(['myevents', 'edit', pId])
  }

  onClickEvent(pId) {
    this.router.navigate(['event', pId])
  }


}
