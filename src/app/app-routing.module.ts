import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { authGuard } from './auth.guard';

const routes: Routes = [

  {
    path : '',
    redirectTo :'/events',
    pathMatch : 'full'
  },
  {
    path : 'events',
    component : EventsComponent
  },
  {
    path : 'special',
    canActivate : [authGuard],
    component : SpecialEventsComponent
  },
  {
    path : 'login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
