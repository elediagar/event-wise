import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface Event {
  id: number;
  name: string;
  date_start: string;
  date_end: string;
  company_name: string;
  company_sector: string;
  email: string;
  phone: string;
  modality: string;
  address: string;
  city: string;
  country: string;
  category: string;
  description_short: string;
  description_long: string;
  url_extension: string;
  img: string;
  room_title1: string;
  room_description1: string;
  room_link1: string;
  room_title2: string;
  room_description2: string;
  room_link2: string;
  fav: boolean;
  attend: boolean;
  host: boolean;
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

  /* Start: general get, post, put... */

  getAll(): Promise<Event[]> {
    return this.httpClient.get<Event[]>(this.baseUrl).toPromise();
  }

  getEventById(pId): Promise<Event> {
    return this.httpClient.get<Event>(`${this.baseUrl}/${pId}`).toPromise();
  }

  insert(formValues) {
    return this.httpClient.post(`${this.baseUrl}-private`, formValues, this.createHeaders()).toPromise();
  }

  update(formValues, pId) {
    return this.httpClient.put(`${this.baseUrl}-private/edit/${pId}`, formValues, this.createHeaders()).toPromise();
  }

  changeStatus(pId) {
    return this.httpClient.put(`${this.baseUrl}-private/${pId}/delete`, {}, this.createHeaders()).toPromise()
  }

  /* End: general get, post, put... */


  /*  Start: Host, Favourites and Attend */

  getEventsHost(): Promise<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/host`, this.createHeaders()).toPromise();
  }

  getEventsHostExpired(): Promise<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/host-expired`, this.createHeaders()).toPromise();
  }

  getEventHostById(pId): Promise<Event> {
    return this.httpClient.get<Event>(`${this.baseUrl}-private/host/${pId}`, this.createHeaders()).toPromise();
  }

  getEventsAttend() {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/attend`, this.createHeaders()).toPromise();
  }

  getEventAttendById(pId): Promise<Event> {
    return this.httpClient.get<Event>(`${this.baseUrl}-private/attend/${pId}`, this.createHeaders()).toPromise();
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

  addEventsFav(pId) {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/fav/${pId}`, this.createHeaders()).toPromise();
  }

  deleteEventsFav(pId) {
    return this.httpClient.delete<Event[]>(`${this.baseUrl}-private/fav/${pId}`, this.createHeaders()).toPromise();
  }
  addEventsAttend(pId) {
    return this.httpClient.get<Event[]>(`${this.baseUrl}-private/attend/add/${pId}`, this.createHeaders()).toPromise();
  }


  deleteEventsAttend(pId) {
    return this.httpClient.delete<Event[]>(`${this.baseUrl}-private/attend/${pId}`, this.createHeaders()).toPromise();
  }

  /*  End: Favourites and attending */




  //FILTROS

  filterByCategory(category): Promise<Event[]> {
    return this.httpClient.post<Event[]>(`${this.baseUrl}/filter`, category).toPromise()
  }

  filterByText(textValue): Promise<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseUrl}/filter/${textValue}`).toPromise()
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
