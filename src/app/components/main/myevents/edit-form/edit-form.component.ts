import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event, EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  providers: [
    DatePipe
  ]
})
export class EditFormComponent implements OnInit {

  event: Event;

  isLinear = false;
  formGroup: FormGroup;
  disabled = false;

  selectedValue: string;
  selectedCar: string;

  categories: string[] = ['Cena o gala', 'Masterclass, curso o taller', 'Comparecencia o firma', 'Conferencia', 'Convención', 'Encuentro o evento de red', 'Feria comercial, feria de consumo o exposición', 'Festival o feria', 'Juego o competición', 'Otro', 'Proyección', 'Seminario o charla', 'Torneo', 'Visita'];

  modality: string[] = ['Online', 'Presencial'];

  constructor(
    private _ngZone: NgZone,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private datepipe: DatePipe
  ) {



  }

  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  // begin text area 

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  //end text area




  async ngOnInit() {
    if (localStorage.getItem('token_event')) {
      this.activatedRoute.params.subscribe(async params => {
        this.event = await this.eventService.getEventHostById(params.event_id);
        console.log(this.event);
        this.formGroup = this.formBuilder.group({
          formArray: this.formBuilder.array([
            this.formBuilder.group({
              name: [this.event.name, Validators.required],
              category: [this.event.category, Validators.required],
              date_start: [this.event.date_start, Validators.required],
              date_end: [this.event.date_end, Validators.required],
              description_short: [this.event.description_short, Validators.required],
              company_name: [this.event.company_name, Validators.required],
              email: [this.event.email],
              phone: [this.event.phone],
              modality: [this.event.modality, Validators.required],
              country: [this.event.country],
              city: [this.event.city],
              address: [this.event.address],
            }),
            this.formBuilder.group({
              img: [this.event.img],
              description_long: [this.event.description_long, Validators.required],
              url_extension: [this.event.url_extension],
            }),
            this.formBuilder.group({
              room_title1: [this.event.room_title1],
              room_description1: [this.event.room_description1],
              room_link1: [this.event.room_link1],
              room_title2: [this.event.room_title2],
              room_description2: [this.event.room_description2],
              room_link2: [this.event.room_link2]
            }),
          ])
        });
      });
    } else {
      Swal.fire({
        title: 'Para poder editar eventos debes iniciar sesión',
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
    const eventEdit = {
      status: "active",
      name: this.formGroup.value.formArray[0].name,
      date_start: this.datepipe.transform(this.formGroup.value.formArray[0].date_start, "yyyy-MM-dd"),
      date_end: this.datepipe.transform(this.formGroup.value.formArray[0].date_end, "yyyy-MM-dd"),
      category: this.formGroup.value.formArray[0].category,
      company_name: this.formGroup.value.formArray[0].company_name,
      company_sector: this.formGroup.value.formArray[0].company_sector,
      modality: this.formGroup.value.formArray[0].modality,
      address: this.formGroup.value.formArray[0].address,
      city: this.formGroup.value.formArray[0].city, country: this.formGroup.value.formArray[0].country,
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
    console.log(eventEdit);
    const response = await this.eventService.update(eventEdit, this.event.id)
    if (!response['error']) {
      this.router.navigate(['myevents', 'host']) //hacer que me dirija al evento creado
    }

  }

}
