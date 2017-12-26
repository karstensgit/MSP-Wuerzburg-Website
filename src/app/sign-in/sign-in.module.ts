import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './components/sign-in.component';
import {SignInContainerComponent} from './container/sign-in.container';
import { signInRoutes } from './sign-in.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(signInRoutes),
  ],
  declarations: [
    SignInContainerComponent,
    SignInComponent
  ]
})
export class SignInModule {}
