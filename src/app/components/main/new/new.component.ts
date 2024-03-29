import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [
    DatePipe
  ]
})


export class NewComponent implements OnInit {

  isLinear = false;
  formGroup: FormGroup;
  disabled = false;

  selectedValue: string;

  categories: string[] = ['Cena o gala', 'Masterclass, curso o taller', 'Comparecencia o firma', 'Conferencia', 'Convención', 'Encuentro o evento de red', 'Feria comercial, feria de consumo o exposición', 'Festival o feria', 'Juego o competición', 'Otro', 'Proyección', 'Seminario o charla', 'Torneo', 'Visita'];

  modality: string[] = ['Online', 'Presencial'];

  constructor(
    private _ngZone: NgZone,
    private formBuilder: FormBuilder,
    private router: Router,
    private eventService: EventService,
    private datepipe: DatePipe,


  ) {
    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
          category: ['', Validators.required],
          date_start: ['', Validators.required],
          date_end: ['', Validators.required],
          description_short: ['', Validators.required],
          company_name: ['', Validators.required],
          email: [''],
          phone: [''],
          modality: ['', Validators.required],
          country: [''],
          city: [''],
          address: [''],
        }),
        this.formBuilder.group({
          img: [''],
          description_long: ["", Validators.required],
          url_extension: [''],
        }),
        this.formBuilder.group({
          room_title1: [''],
          room_description1: [''],
          room_link1: [''],
          room_title2: [''],
          room_description2: [''],
          room_link2: ['']
        }),
      ])
    });

  }



  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  /* ------- Start: text area autosize  */

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  /* End: text area autosize ------*/

  /* 
    handleEditorInit(e) {
      this.editorSubject.next(e.editor);
      this.editorSubject.complete();
    } */


  ngOnInit() {
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

  async onSubmit() {
    console.log(this.formGroup.value.formArray);
    const eventNew = {
      status: "active",
      name: this.formGroup.value.formArray[0].name,
      date_start: this.datepipe.transform(this.formGroup.value.formArray[0].date_start, "yyyy-MM-dd"),
      date_end: this.datepipe.transform(this.formGroup.value.formArray[0].date_end, "yyyy-MM-dd"),
      category: this.formGroup.value.formArray[0].category,
      company_name: this.formGroup.value.formArray[0].company_name,
      modality: this.formGroup.value.formArray[0].modality,
      email: this.formGroup.value.formArray[0].email,
      phone: this.formGroup.value.formArray[0].phone,
      address: this.formGroup.value.formArray[0].address,
      city: this.formGroup.value.formArray[0].city,
      country: this.formGroup.value.formArray[0].country,
      description_short: this.formGroup.value.formArray[0].description_short,
      description_long: this.formGroup.value.formArray[1].description_long,
      url_extension: this.formGroup.value.formArray[1].url_extension,
      img: this.formGroup.value.formArray[1].img,
      room_title1: this.formGroup.value.formArray[2].room_title1,
      room_description1: this.formGroup.value.formArray[2].room_description1,
      room_link1: this.formGroup.value.formArray[2].room_link1,
      room_title2: this.formGroup.value.formArray[2].room_title2,
      room_description2: this.formGroup.value.formArray[2].room_description2,
      room_link2: this.formGroup.value.formArray[2].room_link2
    }
    console.log(eventNew);
    const response = await this.eventService.insert(eventNew)
    if (!response['error']) {
      this.router.navigate(['myevents', 'host']) //hacer que me dirija al evento creado
    }

  }

}
