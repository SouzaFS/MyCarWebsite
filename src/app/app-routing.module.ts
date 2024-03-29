import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ValidateCodeComponent } from './components/validate-code/validate-code.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'', component: MainPageComponent},
  {path:'forget', component: ForgetPasswordComponent},
  {path:'validation', component: ValidateCodeComponent},
  {path:'my_profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
