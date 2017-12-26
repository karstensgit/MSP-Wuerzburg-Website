import {AboutUsContainerComponent} from './about-us/container/about-us.container';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {AppComponent} from './core/container/app.component';
import {SignInContainerComponent} from './sign-in/container/sign-in.container';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: '', component: AboutUsContainerComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule {}
