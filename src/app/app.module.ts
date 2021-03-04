import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';
import { NewComponent } from './components/main/new/new.component';
import { DetailComponent } from './components/main/detail/detail.component';
import { EventDescriptionComponent } from './components/event/description/event-description.component';
import { EventHomeComponent } from './components/event/home/event-home.component';
import { ContactoComponent } from './components/event/contacto/contacto.component';
import { HeaderComponent } from './components/main/header/header.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { CardEventComponent } from './components/main/card-event/card-event.component';
import { ListEventsComponent } from './components/main/list-events/list-events.component';
import { EventHeaderComponent } from './components/event/event-header/event-header.component';
import { EventFooterComponent } from './components/event/event-footer/event-footer.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
