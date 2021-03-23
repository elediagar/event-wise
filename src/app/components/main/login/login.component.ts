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
  errorMessage: string;

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
    this.errorMessage = null;
    const response = await this.userService.loginUser(this.formulario.value);
    if (response.error) {
      setTimeout(() => this.errorMessage = "Datos de acceso incorrectos. Porfavor revisa tu email y contraseña", 500);
    } else {
      localStorage.setItem('token_event', response.token);
      Swal.fire({
        title: '¡Login correcto!',
        confirmButtonText: `Continuar`,
      })
        .then(result => {
          this.router.navigate(['/home'])
        })
      this.errorMessage = null
    }
    console.log(this.formulario.value);

  }

  checkValidator(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
  }

  onClickRegister(pUrl: string) {
    this.router.navigate([pUrl])
  }


}
