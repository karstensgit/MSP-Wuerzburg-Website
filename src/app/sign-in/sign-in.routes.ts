import {PageNotFoundComponent} from '../core/components/page-not-found/page-not-found.component';
import {SignInContainerComponent} from './container/sign-in.container';
import {Routes} from '@angular/router';

export const signInRoutes: Routes = [
  {path: 'sign-in', component: SignInContainerComponent},
];
