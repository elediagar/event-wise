import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router) {

    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.formulario.valid) {
      Swal.fire({
        title: '¡Enhorabuena!',
        text: 'Ya puedes empezar a crear o asistir a eventos',
        confirmButtonText: `Continuar`,
      }
      )
    }
    // const response = await this.userService.loginUser(this.formulario.value);
    console.log(this.formulario.value);

  }

  checkValidator(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
  }

  onClickRegister(pUrl: string) {
    this.router.navigate([pUrl])
  }


}
