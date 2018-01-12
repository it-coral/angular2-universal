import {NgModule, ModuleWithProviders}           from '@angular/core';
import { LoggingService }     from './log';
import {LocalStorage} from './local-storage';
import {SocialLogin} from './social-login';
import {MapStyles} from './map';
import {SpinnerComponent} from './spinner/spinner';
import {PrettyPrintPipe} from './pipes';
import {AutoFocus} from './autofocus';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {WindowRef} from './windowref';
import {AppHttp} from './http';
import {SportService} from './sport-service';
import {HtmlDirective} from './safeHtml';
import {ModalService} from './modal/modal.service';
@NgModule({
  imports: [ NgbDatepickerModule],
  exports: [ SpinnerComponent, PrettyPrintPipe, AutoFocus, HtmlDirective],
  declarations: [ SpinnerComponent, PrettyPrintPipe, AutoFocus, HtmlDirective],
  providers:    []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        LoggingService,
        WindowRef,
        LocalStorage,
        MapStyles,
        AppHttp,
        SportService,
        SocialLogin] // will be available only to whoever calls .forRoot()
    };
  }
}
