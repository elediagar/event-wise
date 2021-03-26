import { Component, OnInit } from '@angular/core';
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
    private eventService: EventService
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
      title: '¿Estas seguro de que quieres eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3ec9cc',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await this.eventService.changeStatus(pId);
        this.eventsHost = await this.eventService.getEventsHost();
        Swal.fire('Articulo borrado')
      }
    })


  }


}
