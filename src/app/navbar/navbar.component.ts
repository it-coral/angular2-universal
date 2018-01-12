import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
/* import {HOME_ROUTE_URL, ORGANISERS_ROUTE_URL, PROFILE_ROUTE_URL,
           USER_ENTRIES_ROUTE_URL} from '../app.routes';
import {Logger, LoggingService} from '../core/log';
import {Config} from '../../environments/config';
import {ProfileService} from '../user/profile/core/profile-service';
import {Observable} from 'rxjs/Observable';
import {State} from '../app.reducers';
import {Store} from '@ngrx/store';
import {getIsLoggedIn} from '../user/authentication/reducers';
import {getProfile} from '../user/profile/core/reducers';
import {isDefined} from '@ng-bootstrap/ng-bootstrap/util/util';
import {LogoutAction} from '../user/authentication/actions';
import {Subscription} from 'rxjs/Subscription'; */

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnDestroy {

  public isCollapsed: boolean = true;
  public accountIsCollapsed: boolean = true;
  public loggedIn: boolean;
  public userMenuOpen: boolean;
  // public email$: Observable<string>;
  // sub: Subscription;
  // log: Logger;

  constructor(// private store: Store<State>,
              // loggingService: LoggingService,
              private router: Router,
              // private config: Config,
              // private profileService: ProfileService
            ) {
    // this.log = loggingService.getLogger('Navbar');
    // this.sub = store.select(getIsLoggedIn).subscribe((isLoggedIn) => this.loggedIn = isLoggedIn);
    // this.email$ = store.select(getProfile).map(p => isDefined(p) ? p.email : undefined);

    // This needs to be done on load, as if you land on the
    // login page directly, navbar has not been lazy loaded yet
    // and as such was not subscribed at the time of the event.
    this.clickedOutside = this.clickedOutside.bind(this);

  }

  get isOrganiserRoute() {
    return null; // this.router.isActive(ORGANISERS_ROUTE_URL, true);
  }

  get loginLink() {
    return null; // this.isOrganiserRoute ? this.config.adminUrl : '#/login';
  }

  get registerLink() {
    return null; // this.isOrganiserRoute ? this.config.adminUrl + '/#/register' : '#/register';
  }

  onUserMenuClicked() {
    this.userMenuOpen = !this.userMenuOpen;
  }

  clickedOutside() {
    this.userMenuOpen = false;
  }

  goToIndex() {
    this.userMenuOpen = false;
    // this.router.navigateByUrl(HOME_ROUTE_URL);
  }

  goToProfile() {
    this.userMenuOpen = false;
    this.isCollapsed = true;
    // this.router.navigateByUrl(PROFILE_ROUTE_URL);
  }

  goToEntries() {
    this.userMenuOpen = false;
    this.isCollapsed = true;
    // this.router.navigateByUrl(USER_ENTRIES_ROUTE_URL);
  }

  logout() {
    this.isCollapsed = true;
    // this.store.dispatch(new LogoutAction());
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
