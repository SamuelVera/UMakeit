import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { NavbarComponent } from './login/navigation/navbar/navbar.component';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarLoginComponent } from './login/navigation/navbar-login/navbar-login.component';
import { FormComponent } from './form/form.component';
import { MenuComponent } from './login/home/menu/menu.component';
import { CuentaComponent } from './login/home/cuenta/cuenta.component';
import { HelpComponent } from './login/home/help/help.component';
import { NavbarAdminComponent } from './login/navigation/navbar-admin/navbar-admin.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { EnviosComponent } from './admin/envios/envios.component';
import { EditarPlatoComponent } from './admin/menu-admin/editar-plato/editar-plato.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: 'menu-admin/editar/:id', component: EditarPlatoComponent},
      { path: 'menu-admin', component: MenuAdminComponent},
      { path: 'home-admin', component: HomeAdminComponent},
      { path: 'envios', component: EnviosComponent},
    ],
    component: NavbarAdminComponent,
  },

  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'menu', component: MenuComponent},
      { path: 'ayuda', component: HelpComponent},
      { path: 'user', component: CuentaComponent},

    ],
    component: NavbarComponent,
  },

  {
    path: '',
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full'},
      { path:'login', component: LoginComponent},
      { path: 'form', component: FormComponent},
    ],
    component: NavbarLoginComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
