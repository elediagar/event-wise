import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(private userService: UserService) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      email_repeat: new FormControl(),
      password: new FormControl(),
      password_repeat: new FormControl(),
      mobile: new FormControl(),
      adress: new FormControl(),
      city: new FormControl(),
      postcode: new FormControl(),
      country: new FormControl(),
    })
  }

  ngOnInit(): void {
  }


}
