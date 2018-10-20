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
      { path: '', redirectTo: '/login', pathMatch: 'full'},
      { path:'login', component: LoginComponent},
    ],
    component: NavbarLoginComponent
  },

  {
    path: '',
    children: [
      { path:'form', redirectTo: '/form', pathMatch: 'full'},
      { path:'form', component: FormComponent},
    ],
    component: NavbarLoginComponent
  },

  {
    path: '',
    children: [
      { path: 'home', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
    ],
    component: NavbarComponent,
  },

  {
    path: '',
    children: [
      { path: 'menu', redirectTo: '/menu', pathMatch: 'full'},
      { path: 'menu', component: MenuComponent},
    ],
    component: NavbarComponent,
  },

  {
    path: '',
    children: [
      { path: 'ayuda', redirectTo: '/ayuda', pathMatch: 'full'},
      { path: 'ayuda', component: HelpComponent},
    ],
    component: NavbarComponent,
  },

  {
    path: '',
    children: [
      { path: 'user', redirectTo: '/user', pathMatch: 'full'},
      { path: 'user', component: CuentaComponent},
    ],
    component: NavbarComponent,
  },

  {
    path: '',
    children: [
      { path: 'menu-admin', redirectTo: '/menu-admin', pathMatch: 'full'},
      { path: 'menu-admin', component: MenuAdminComponent},
    ],
    component: NavbarAdminComponent,
  },

  {
    path: '',
    children: [
      { path: 'home-admin', redirectTo: '/home-admin', pathMatch: 'full'},
      { path: 'home-admin', component: HomeAdminComponent},
    ],
    component: NavbarAdminComponent,
  },

  {
    path: '',
    children: [
      { path: 'envios', redirectTo: '/envios', pathMatch: 'full'},
      { path: 'envios', component: EnviosComponent},
    ],
    component: NavbarAdminComponent,
  }

  {
    path: '',
    children: [
      { path: 'menu-admin/editar/:id', redirectTo: '/menu-admin/editar/:id', pathMatch: 'full'},
      { path: 'menu-admin/editar/:id', component: EditarPlatoComponent},
    ],
    component: NavbarAdminComponent,
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
