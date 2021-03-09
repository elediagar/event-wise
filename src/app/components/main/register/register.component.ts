import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      name: new FormControl('', [
        Validators.required
      ]),
      surname: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/)
      ]),
      email_repeat: new FormControl(),
      password: new FormControl('', [
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,8}$/)
      ]),
      password_repeat: new FormControl(),
      mobile: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
      city: new FormControl('', [
        Validators.required
      ]),
      postcode: new FormControl('', [
        Validators.required
      ]),
      country: new FormControl('', [
        Validators.required
      ])

    }, [this.passwordValidator]);
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    // const response = await this.userService.registerUser(this.formulario.value);
    console.log(this.formulario.value);

  }

  checkValidator(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
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

}
