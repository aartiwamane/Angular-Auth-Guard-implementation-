import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
//import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LoginComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,provideHttpClient(withFetch()),EventService,
    {
      
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
