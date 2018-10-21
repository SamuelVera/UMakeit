import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireModule} from 'angularfire2';
import { environment } from './../environments/environment';

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

  //Servicios
import { PlatoService } from './plato.service';
import { AddPlatoComponent } from './admin/menu-admin/add-plato/add-plato.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'uMakeIt'),
    AngularFirestoreModule,
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
    AddPlatoComponent,
  ],
  providers: [PlatoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
