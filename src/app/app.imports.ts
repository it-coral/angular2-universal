import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';

import { MaterialModule } from './material.module';
// import { ResponsiveModule } from 'ngx-responsive';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics  } from 'angulartics2/ga';


import { DEV_REDUCERS, syncReducers, resetOnLogout, AppState } from './reducers';
import { StoreDevToolsModule } from './features/store-devtools.module';
import { HomeModule } from './home/home.module';
import { UserEffects } from './user/user.effects';
import { userReducer } from './user/user.reducer';
import { storeFreeze } from 'ngrx-store-freeze';
import { CoreModule } from './core/module';


const STORE_DEV_TOOLS_IMPORTS = [];
if (ENV === 'development' && !AOT &&
  ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
) STORE_DEV_TOOLS_IMPORTS.push(...[
  StoreDevtoolsModule.instrument({
    monitor: useLogMonitor({
      visible: true,
      position: 'right'
    })
  })
]);

export const metaReducers: MetaReducer<AppState>[] = ENV === 'development' ?
  [...DEV_REDUCERS, resetOnLogout] : [resetOnLogout];

export const APP_IMPORTS = [
  EffectsModule.forRoot([UserEffects]),
  MaterialModule,
  NgbCollapseModule,
  NgbModule.forRoot(),
  Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  HomeModule,
  // ResponsiveModule,
  ReactiveFormsModule,
  CoreModule.forRoot(),
  StoreModule.forRoot(syncReducers, { metaReducers }),
  StoreRouterConnectingModule,
  STORE_DEV_TOOLS_IMPORTS,
  StoreDevToolsModule,
  TransferHttpModule
];
