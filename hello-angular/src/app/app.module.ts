import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { ClockComponent } from './clock/clock.component';
import { CounterComponent } from './counter/counter.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloComponent,
    ClockComponent,
    CounterComponent,
    LoginFormComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
