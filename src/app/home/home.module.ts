import { NgModule }           from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {CoreModule} from '../core/module';
import {SearchBarComponent} from './searchbar/searchbar.component';
import {CardComponent} from './card.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterModule} from './footer/footer.module';
import {CommonModule} from '@angular/common';
import {ResponsiveModule} from 'ngx-responsive';

console.log('`HomeModule` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
      CommonModule, FormsModule, RouterModule.forChild(routes),
      CoreModule, NgbModule, FooterModule, ResponsiveModule
    ],
  declarations: [
    HomeComponent, SearchBarComponent, CardComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
  static routes = routes;
}
