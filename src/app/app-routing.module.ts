import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthLoginGuard } from './services/authLogin.guard';

const routes: Routes = [
   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: 'signin', component: SigninComponent,canActivate: [AuthLoginGuard] },
  { path: 'signup', component: SignupComponent,canActivate: [AuthLoginGuard] },
  { path: '**', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
