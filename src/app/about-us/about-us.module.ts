import {aboutUsRoutes} from './about-us.routes';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './components/about-us.component';
import {AboutUsContainerComponent} from './container/about-us.container';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
//    RouterModule.forChild(aboutUsRoutes)
  ],
  declarations: [
    AboutUsComponent,
    AboutUsContainerComponent
  ]
})
export class AboutUsModule {}
