import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.scss']
})
export class EventHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isCollapse = true;   // guardamos el valor
  toggleState() { // manejador del evento
    this.isCollapse = !this.isCollapse
  }

}
