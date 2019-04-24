import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { LoginCmpComponent } from './login-cmp/login-cmp.component';
import { AnimationCmpComponent } from './animation-cmp/animation-cmp.component';
import { MaterialCmpComponent } from './material-cmp/material-cmp.component';

const routes: Routes = [{
  path: 'app-new-cmp',
  component: NewCmpComponent
}, {
  path: 'app-login-cmp',
  component: LoginCmpComponent
}, {
  path: 'app-animation-cmp',
  component: AnimationCmpComponent
}, {
  path: 'app-material-cmp',
  component: MaterialCmpComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
