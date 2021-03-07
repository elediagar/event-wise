import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { DetailComponent } from './components/main/detail/detail.component';
import { NewComponent } from './components/main/new/new.component';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/main/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/main/register/register.component';
import { EventHomeComponent } from './components/event/event-home/event-home.component';
import { EventDescriptionComponent } from './components/event/event-description/event-description.component';
import { ContactoComponent } from './components/event/contacto/contacto.component';
import { ListEventsComponent } from './components/main/list-events/list-events.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'new', component: NewComponent },
      { path: 'event/id/:event_id', component: DetailComponent },
    ]
  },
  {
    path: 'event/:event-name', component: EventComponent, children: [
      { path: 'home', component: EventHomeComponent },
      { path: 'description', component: EventDescriptionComponent },
      { path: 'contact', component: ContactoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
