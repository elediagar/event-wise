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
  phone: number;
  address: string;
  city: string;
  postcode: string;
  country: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users'
  }

  registerUser(formValues) {
    return this.httpClient.post(`${this.baseUrl}/register`, formValues).toPromise()
  }

  loginUser(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise()
  }

}
