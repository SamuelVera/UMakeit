import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { MenuComponent } from './home/menu/menu.component';
import { CuentaComponent } from './home/cuenta/cuenta.component';
import { HelpComponent } from './home/help/help.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarLoginComponent } from './navigation/navbar-login/navbar-login.component';
import { FormComponent } from './form/form.component';
import { NavbarAdminComponent } from './navigation/navbar-admin/navbar-admin.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { EnviosComponent } from './admin/envios/envios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent,
    CuentaComponent,
    HelpComponent,
    HomeComponent,
    NavbarLoginComponent,
    FormComponent,
    NavbarAdminComponent,
    MenuAdminComponent,
    HomeAdminComponent,
    EnviosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
