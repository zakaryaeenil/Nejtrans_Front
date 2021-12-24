import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginFormComponent } from './Login/login-form/login-form.component';
import { NavbarComponent } from './Helpers/navbar/navbar.component';
import { SidebarComponent } from './Helpers/sidebar/sidebar.component';
import {ChartsModule} from "ng2-charts";
import { DashboardComponent } from './Dashboard/dashboard.component';
import { CallendarviewComponent } from './Dashboard/callendarview/callendarview.component';
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FlatpickrModule} from "angularx-flatpickr";
import {authInterceptorProviders} from "./Login/interceptor.service";
import {UserService} from "./Services/user.service";
import {AuthService} from "./Login/auth.service";
import {AppRoutingModule} from "./app-routing.module";
import { ForgotformComponent } from './Login/forgotform/forgotform.component';
import {ToastrModule} from "ngx-toastr";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    CallendarviewComponent,
    ForgotformComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    ToastrModule.forRoot(),
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [authInterceptorProviders,AuthService ,UserService,LoginFormComponent,ToastrModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
