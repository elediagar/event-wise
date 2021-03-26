import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  tipo = new FormControl();
  options: string[] = ['Conferencia', 'Masterclass', 'Proceso de selección'];
  filteredOptions: Observable<string[]>;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      tipo: ['', Validators.required],
      start: new FormControl(),
      end: new FormControl()
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  ngOnInit() {

    this.filteredOptions = this.tipo.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    if (localStorage.getItem('token_event')) {
      return true;
    } else {
      Swal.fire({
        title: 'Para poder crear eventos debes iniciar sesión',
        confirmButtonText: `Continuar`,
      })
        .then(result => {
          this.router.navigate(['/login'])
        })
      return false;
    }

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
