import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogModule } from 'ngx-modal-dialog';

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
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

  //Servicios
import { AddPlatoComponent } from './admin/menu-admin/add-plato/add-plato.component';
import { ConfirmationDialogService } from './confirm-dialog/confirm-dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'uMakeIt'),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireStorageModule,
    CoreModule,
    NgxPayPalModule,
    NgbModule,
    ModalDialogModule.forRoot()
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
    ConfirmDialogComponent
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmDialogComponent ]
})
export class AppModule { }
