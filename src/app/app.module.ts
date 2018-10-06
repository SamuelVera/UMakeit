import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { MenuComponent } from './home/menu/menu.component';
import { CarritoComponent } from './home/carrito/carrito.component';
import { HelpComponent } from './home/help/help.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarLoginComponent } from './navigation/navbar-login/navbar-login.component';
import { InicioComponent } from './home/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent,
    CarritoComponent,
    HelpComponent,
    HomeComponent,
    NavbarLoginComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
