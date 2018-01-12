import {NgModule, ModuleWithProviders}           from '@angular/core';
import {ModalService, ModalServiceState} from './modal.service';
import {EffectsModule} from '@ngrx/effects';
import {ModalEffects} from './modal.effects';
import {ModalActions} from './modal.actions';

@NgModule({
  imports: [ ModalEffects ],
  exports: [ ],
  declarations: [ ],
  providers:    [ ModalService, ModalActions]
})
export class ModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [ ModalServiceState ]
    };
  }
}
