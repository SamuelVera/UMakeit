import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarLoginComponent } from './navigation/navbar-login/navbar-login.component';
import { FormComponent } from './form/form.component';
import { MenuComponent } from './home/menu/menu.component';
import { CuentaComponent } from './home/cuenta/cuenta.component';
import { HelpComponent } from './home/help/help.component';
import { NavbarAdminComponent } from './navigation/navbar-admin/navbar-admin.component';
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {  }
