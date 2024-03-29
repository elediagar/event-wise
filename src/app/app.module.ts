import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';
import { NewComponent } from './components/main/new/new.component';
import { DetailComponent } from './components/main/detail/detail.component';
import { EventHomeComponent } from './components/event/event-home/event-home.component';
import { ContactoComponent } from './components/event/contacto/contacto.component';
import { HeaderComponent } from './components/main/header/header.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { CardEventComponent } from './components/main/card-event/card-event.component';
import { ListEventsComponent } from './components/main/list-events/list-events.component';
import { EventHeaderComponent } from './components/event/event-header/event-header.component';
import { EventFooterComponent } from './components/event/event-footer/event-footer.component';
import { EventComponent } from './components/event/event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyeventsComponent } from './components/main/myevents/myevents.component';
import { HostComponent } from './components/main/myevents/host/host.component';
import { AttendComponent } from './components/main/myevents/attend/attend.component';
import { FavComponent } from './components/main/myevents/fav/fav.component';
import { UserHomeComponent } from './components/main/myevents/user-home/user-home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './interceptors/http-interceptor';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { RoomsComponent } from './components/event/rooms/rooms.component';
import { DescriptionComponent } from './components/event/description/description.component';
import { EditFormComponent } from './components/main/myevents/edit-form/edit-form.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NewComponent,
    DetailComponent,
    EventHomeComponent,
    ContactoComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    CardEventComponent,
    ListEventsComponent,
    EventHeaderComponent,
    EventFooterComponent,
    EventComponent,
    MyeventsComponent,
    HostComponent,
    AttendComponent,
    FavComponent,
    UserHomeComponent,
    RoomsComponent,
    DescriptionComponent,
    EditFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    BrowserModule,
    EditorModule,
    NgMatSearchBarModule
  ],
  providers: [
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
