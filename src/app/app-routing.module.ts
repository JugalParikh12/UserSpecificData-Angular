import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'login',component:SigninComponent},
  {path:'home',component:HomeComponent,canActivate:[authGuard]},
  {path:'',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
