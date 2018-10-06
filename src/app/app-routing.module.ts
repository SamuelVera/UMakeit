import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarLoginComponent } from './navigation/navbar-login/navbar-login.component';

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
  path: 'home',
  children: [
    { path: 'home', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent}
  ],
  component: NavbarComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {  }
