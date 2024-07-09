import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { Approutes } from './app.constans';

const routes: Routes = [
  { path: Approutes.LOGIN, component: LogInComponent, },
  { path: Approutes.HOME, component: HomeComponent, },  
  { path: '', redirectTo: Approutes.LOGIN, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
