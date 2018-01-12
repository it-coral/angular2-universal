import {NgModule} from '@angular/core';
import {CoreModule} from '../../core/module';
import {FooterComponent} from './footer.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

console.log('`FooterModule` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute

@NgModule({
  imports:      [CommonModule, RouterModule, FormsModule, NgbModule],
  declarations:      [FooterComponent],
  exports:      [FooterComponent]
})
export class FooterModule {
}
