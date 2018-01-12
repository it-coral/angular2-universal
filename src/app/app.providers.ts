import { UserService } from './user/user.service';
import { RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './reducers/index';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Config }  from '../environments/config';
import { environment } from '../environments/environment';
// TODO: Import custom data formater

export const APP_PROVIDERS = [
  { provide: RouterStateSerializer, useClass: CustomSerializer },
  { provide: Config, useValue: environment },
  UserService
];
