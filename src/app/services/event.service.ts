import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface Event {
  id: number;
  name: string;
  date_start: string;
  date_end: string;
  company_name: string;
  company_sector: string;
  modality: string;
  address: string;
  city: string;
  country: string;
  cathegory: string;
  description_short: string;
  description_long: string;
  url_extension: string;
  img: string;
  fav: boolean;
  //lat lon para el back?? / numero de la calle en el front?
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient,

  ) {

    this.baseUrl = "http://localhost:3000/api/events"

  }

  // GET EVENTS

  getAll(): Promise<Event[]> {
    return this.httpClient.get<Event[]>(this.baseUrl).toPromise();
  }

  getEventById(pId): Promise<Event> {
    return this.httpClient.get<Event>(`${this.baseUrl}/${pId}`).toPromise();
  }

  getEventsHost(): Promise<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/host`, this.createHeaders()).toPromise();
  }

  getEventsHostExpired(): Promise<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/host/expired`, this.createHeaders()).toPromise();
  }

  getEventsAttend() {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/attend`, this.createHeaders()).toPromise();
  }

  getEventsAttendExpired() {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/attend/expired`, this.createHeaders()).toPromise();
  }

  getEventsFav() {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/fav/`, this.createHeaders()).toPromise();
  }

  getEventsFavExpired(): Promise<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/fav/expired`, this.createHeaders()).toPromise();
  }

  // ADD DELETE CREATE ...

  addEventsFav(pId) {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/fav/${pId}`, this.createHeaders()).toPromise();
  }

  deleteEventsFav(pId) {
    return this.httpClient.delete<Event[]>(`${this.baseUrl}-private/fav/${pId}`, this.createHeaders()).toPromise();
  }

  insert(formValues) {
    return this.httpClient.post(`${this.baseUrl}-private`, formValues, this.createHeaders()).toPromise();
  }

  changeStatus(pId) {
    return this.httpClient.put(`${this.baseUrl}-private/${pId}/delete`, {}, this.createHeaders()).toPromise()
  }

  //HEADERS

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token_event')
      })
    }
  }

  // TOKEN


  checkTocken() {
    this.httpClient.get(`${this.baseUrl}-private/checktoken`, this.createHeaders()).toPromise()
  }


}
