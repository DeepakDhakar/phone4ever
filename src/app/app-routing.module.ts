import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { HomeComponent } from './home/home.component';
import { ProblemDetailsComponent } from './problem-details/problem-details.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  { path:  'login',component:  LoginComponent},
    { path:  'register', component:  RegisterComponent },
    { path:  'forgot-password', component:  ForgotPasswordComponent },
    { path:  'verify-email', component:  VerifyEmailComponent },
    { path:  'home', component:  HomeComponent },
    { path:  'problem-details', component:  ProblemDetailsComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
