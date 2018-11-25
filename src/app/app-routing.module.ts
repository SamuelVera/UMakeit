import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

import { AddPlatoComponent } from './admin/menu-admin/add-plato/add-plato.component';
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
      { path: 'home', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard]},
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    ],
    component: NavbarComponent,
  },

  {
    path: '',
    children: [
      { path: 'menu', redirectTo: '/menu', pathMatch: 'full', canActivate: [AuthGuard]},
      { path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
    ],
    component: NavbarComponent,
  },

  {
    path: '',
    children: [
      { path: 'ayuda', redirectTo: '/ayuda', pathMatch: 'full', canActivate: [AuthGuard]},
      { path: 'ayuda', component: HelpComponent, canActivate: [AuthGuard]},
    ],
    component: NavbarComponent,
  },

  {
    path: '',
    children: [
      { path: 'user', redirectTo: '/user', pathMatch: 'full', canActivate: [AuthGuard]},
      { path: 'user', component: CuentaComponent, canActivate: [AuthGuard]},
    ],
    component: NavbarComponent,
  },

  {
    path: '',
    children: [
      { path: 'menu-admin', redirectTo: '/menu-admin', pathMatch: 'full', canActivate: [AuthGuard]},
      { path: 'menu-admin', component: MenuAdminComponent, canActivate: [AuthGuard]},
    ],
    component: NavbarAdminComponent,
  },

  {
    path: '',
    children: [
      { path: 'home-admin', redirectTo: '/home-admin', pathMatch: 'full', canActivate: [AuthGuard]},
      { path: 'home-admin', component: HomeAdminComponent, canActivate: [AuthGuard]},
    ],
    component: NavbarAdminComponent,
  },

  {
    path: '',
    children: [
      { path: 'envios', redirectTo: '/envios', pathMatch: 'full', canActivate: [AuthGuard]},
      { path: 'envios', component: EnviosComponent, canActivate: [AuthGuard]},
    ],
    component: NavbarAdminComponent,
  },

  {
    path: '',
    children: [
      { path: 'menu-admin/add-plato', redirectTo: 'menu-admin/add-plato', pathMatch: 'full', canActivate: [AuthGuard]},
      { path: 'menu-admin/add-plato', component: AddPlatoComponent, canActivate: [AuthGuard]},
    ],
    component: NavbarAdminComponent,
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
