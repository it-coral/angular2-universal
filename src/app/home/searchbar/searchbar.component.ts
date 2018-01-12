import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {SEARCH_ROUTE_URL} from '../../app.routing';
import {Logger, LoggingService} from '../../core/log';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import {NgbDateParserFormatter}
from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';
import {Angulartics2} from 'angulartics2';
import {SportService, Sport} from '../../core/sport-service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({

  selector: 'searchbar',
  styleUrls: ['./searchbar.component.scss'],
  templateUrl: './searchbar.component.html'
})
export class SearchBarComponent implements OnInit {
  log: Logger;
  // parser: NgbDateParserFormatter;
  public sports: Sport[];
  public sportsLoading: boolean;
  public sportsSub: any;

  public searchLocation: string = '';
  public sportId: string = null;
  // public fromDate:NgbDate;

  constructor(private _router: Router,
              private http: Http,
              private angulartics2: Angulartics2,
              logginService: LoggingService,
              // parser: NgbDateParserFormatter,
              private sportService: SportService) {
    let log: Logger = logginService.getLogger('RegisterComponent');

    this.log = log;
    // this.parser = parser;
  }

/*  fromDateIconClick() {
    this.angulartics2.eventTrack
    .next({ action: 'SearchBarFromDateIconClick', properties: { category: 'HomePage' }});
  }

  fromDateValueChange() {
    this.angulartics2.eventTrack
    .next({ action: 'SearchBarFromDateFieldValueChange', properties: { category: 'HomePage' }});
  }*/

  ngOnInit() {
    this.log.debug('hello `SearchBar` component');

    // let today = new Date();
    // this.fromDate = new NgbDate(today.getFullYear(), today.getMonth() + 1, today.getDate());

    this.sportId = null;

    this.sportsLoading = true;
    this.sportsSub = this.sportService.getSports()
      .subscribe((sports) => {
          this.sports = sports;
          this.sportsLoading = false;
        },
        () => {
          this.sportsLoading = false;
        });
  }

  searchClick() {
    this.angulartics2.eventTrack
    .next({ action: 'SearchBarSearchButtonClick', properties: { category: 'HomePage' }});
    this._search();
  }

  searchEnterKey() {
    this.angulartics2.eventTrack
    .next({ action: 'SearchBarSearchButtonEnterKey', properties: { category: 'HomePage' }});
    this._search();
  }

  private _search() {
    this._router.navigate([SEARCH_ROUTE_URL,
      {
        location: this.searchLocation,
        sport_id: this.sportId,
        // fromDate: this.fromDate ? this.parser.format(this.fromDate) : '',
      }]);
  }

}
