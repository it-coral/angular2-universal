import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {ModalOptions} from './modal-options.modal';
import {ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalActions {

  static OPEN = '[Modal] Open';
  open(modalOptions: ModalOptions): Action {
    return {
      type: ModalActions.OPEN
    };
  }

  static OPENED = '[Modal] Opened';
  opened(cmpName: string): Action {
    return {
      type: ModalActions.OPENED
    };
  }

  static CLOSE = '[Modal] Close';
  close(reason: string): Action {
    return {
      type: ModalActions.CLOSE
    };
  }

  static CLOSED = '[Modal] Closed';
  closed(reason: string): Action {
    return {
      type: ModalActions.CLOSED
    };
  }

  static DISMISS  = '[Modal] Dismiss';
  dismiss(reason: string | ModalDismissReasons): Action {
    return {
      type: ModalActions.DISMISS
    };
  }

  static DISMISSED = '[Modal] Dismissed';
  dismissed(reason: string | ModalDismissReasons): Action {
    return {
      type: ModalActions.DISMISSED
    };
  }

}
