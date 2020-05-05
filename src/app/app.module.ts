import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module'
import { DefaultModule } from './layouts/default/default.module';
import { logging } from 'protractor';
import { LoginComponent } from './layouts/login/login.component';

//importas el serviciode js 
import {CargarScriptsService} from './cargar-scripts.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MaterialModule
    
  ],
  providers: [
    //aqui agregas el servicio de js 
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
