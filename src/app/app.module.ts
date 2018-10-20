import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './login/navigation/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './login/home/menu/menu.component';
import { CuentaComponent } from './login/home/cuenta/cuenta.component';
import { HelpComponent } from './login/home/help/help.component';
import { HomeComponent } from './login/home/home.component';
import { NavbarLoginComponent } from './login/navigation/navbar-login/navbar-login.component';
import { FormComponent } from './form/form.component';
import { NavbarAdminComponent } from './login/navigation/navbar-admin/navbar-admin.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { EnviosComponent } from './admin/envios/envios.component';
import { EditarPlatoComponent } from './admin/menu-admin/editar-plato/editar-plato.component';

  //Simulador de servidor
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
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
    EditarPlatoComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
