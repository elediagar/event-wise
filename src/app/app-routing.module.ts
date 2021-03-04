import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { DetailComponent } from './components/main/detail/detail.component';
import { NewComponent } from './components/main/new/new.component';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/main/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/main/register/register.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'new-event', component: NewComponent },
      { path: 'event/:event_id', component: DetailComponent },
    ]
  },
  {
    path: 'event/:event-name', component: EventComponent, children: [
      { path: 'home', },
      { path: 'description', },
      { path: 'contact', },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
