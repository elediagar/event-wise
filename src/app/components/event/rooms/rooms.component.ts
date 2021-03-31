import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/services/event.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  @Input() evento: Event;

  constructor() { }

  ngOnInit(): void {
  }

}
