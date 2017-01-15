import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {RouterModule}from '@angular/router';
import { AppComponent }  from './app.component';
import { LoginComponent} from './login/login.component';
import {MainComponent}from './menu/menu.component'
import {LoginService} from "./login/login.service";
import {ForgotComponent} from './login/forgot.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ForgotComponent
  ],
  providers: [
    LoginService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
 // constructor(storageService: LocalStorageService){}
}

