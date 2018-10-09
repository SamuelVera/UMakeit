import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarLoginComponent } from './navigation/navbar-login/navbar-login.component';
<<<<<<< HEAD

=======
import { FormComponent } from './form/form.component';
import { MenuComponent } from './home/menu/menu.component'
import { CarritoComponent } from './home/carrito/carrito.component'
import { HelpComponent } from './home/help/help.component'
>>>>>>> origin/master
const routes: Routes = [
{
    path: '',
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full'},
      { path:'login', component: LoginComponent},
    ],
    component: NavbarLoginComponent
},

<<<<<<< HEAD
  
{
  path: 'home',
  children: [
    { path: 'home', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent}
  ],
  component: NavbarComponent,
}

];
=======
{
  path: '',
  children: [
    { path: 'form', redirectTo: '/form', pathMatch: 'full'},
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
    { path: 'historial', redirectTo: '/historial', pathMatch: 'full'},
    { path: 'historial', component: CarritoComponent},
  ],
  component: NavbarComponent,
}
]
>>>>>>> origin/master

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {  }
