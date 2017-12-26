import { AboutUsModule } from './about-us/about-us.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './core/container/app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule, appRoutes} from './app-routing.module';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {ToolbarComponent} from './core/components/toolbar/toolbar.component';
import {SignInModule} from './sign-in/sign-in.module';
import {SidenavComponent} from './core/components/sidenav/sidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    SignInModule,
    BrowserAnimationsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
