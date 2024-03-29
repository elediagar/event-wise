import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      surname: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/)
      ]),
      email_repeat: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,8}$/)
      ]),
      password_repeat: new FormControl(),
      mobile: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      postcode: new FormControl(),
      country: new FormControl()

    }, [this.passwordValidator, this.emailValidator]);
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      const response = await this.userService.registerUser(this.formulario.value);
      Swal.fire({
        title: '¡Enhorabuena!',
        text: 'Haz login y empieza a crear o asistir a eventos',
        confirmButtonText: `Continuar`,
      })
    }
    this.router.navigate(['/login'])

    console.log(this.formulario.value);

  }

  checkValidator(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
  }

  emailValidator(form: FormGroup) {
    const emailValue = form.get('email').value;
    const emailRepeatValue = form.get('email_repeat').value;
    if (emailValue === emailRepeatValue) {
      return null
    } else {
      return { emailValidator: true }
    }
  }

  passwordValidator(form: FormGroup) {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('password_repeat').value;
    console.log(passwordValue, passwordRepeatValue);

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else {
      return { passwordvalidator: true }
    }
  }

  onClickLogin(pUrl: string) {
    this.router.navigate([pUrl])
  }






}
