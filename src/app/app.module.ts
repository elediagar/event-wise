import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';
import { NewComponent } from './components/main/new/new.component';
import { DetailComponent } from './components/main/detail/detail.component';
import { EventDescriptionComponent } from './components/event/event-description/event-description.component';
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


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NewComponent,
    DetailComponent,
    EventDescriptionComponent,
    EventHomeComponent,
    ContactoComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    CardEventComponent,
    ListEventsComponent,
    EventHeaderComponent,
    EventFooterComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
