import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  name: string;
  surname: string;
  email: string;
  //email_repeat: string;
  password: string;
  //password_repeat: string;
  mobile: number;
  adress: string;
  city: string;
  postcode: string;
  country: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

}
