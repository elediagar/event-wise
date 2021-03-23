import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/services/event.service';



@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss']
})




export class CardEventComponent implements OnInit {

  @Input() evento: Event;

  constructor() { }

  ngOnInit(): void {
  }

}
