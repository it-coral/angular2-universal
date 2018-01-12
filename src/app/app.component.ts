import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferState } from '../modules/transfer-state/transfer-state';
import { views } from './app-nav-views';
import { Logger, LoggingService } from './core/log';
import { MOBILE } from './services/constants';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'my-app',
  styleUrls: ['main.scss', './app.component.scss'],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  showMonitor = (ENV === 'development' && !AOT &&
    ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
  );
  mobile = MOBILE;
  sideNavMode = MOBILE ? 'over' : 'side';
  views = views;

  log: Logger;

  constructor(
    private cache: TransferState,
    public route: ActivatedRoute,
    loggingService: LoggingService,
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    public router: Router
  ) {
    this.log = loggingService.getLogger('App');
  }

  ngOnInit() {
    this.cache.set('cached', true);
  }

  activateEvent(event) {
    if (ENV === 'development') {
      console.log('Activate Event:', event);
    }
  }

  deactivateEvent(event) {
    if (ENV === 'development') {
      console.log('Deactivate Event', event);
    }
  }
}
