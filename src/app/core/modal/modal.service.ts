import {Injectable} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';
import {ModalActions} from './modal.actions';
import {ModalOptions} from './modal-options.modal';
import 'rxjs/add/operator/filter';
import {Logger, LoggingService} from '../log';



@Injectable()
export class ModalServiceState {
  modalRef: NgbModalRef;
}

@Injectable()
export class ModalService {

  private log: Logger;
  constructor(private state: ModalServiceState,
              private store: Store<any>,
              private modalActions: ModalActions,
              private modal: NgbModal,
              ls: LoggingService) {
      this.log = ls.getLogger('ModalService');
  }

  public handleNavigation(): void {
    const modalExists = this.state.modalRef !== undefined;
    this.log.debug(`handleNavigation modalExists:`, modalExists);
    if (modalExists) {
      this.store.dispatch(this.modalActions.close('Navigating Away'));
    }
  }

  public get modalRef(): NgbModalRef {
    return this.state.modalRef;
  }

  public open(options: ModalOptions) {

    this.state.modalRef = this.modal.open(options.cmpType, options.modalOptions);
    if (options.props) {
      for (const key in options.props) {
        if (options.props.hasOwnProperty(key)) {
          this.state.modalRef.componentInstance[key] = options.props[key];
        }
      }
    }

    this.state.modalRef.result
      .then(result => this.store.dispatch(this.modalActions.closed(result)))
      .catch(reason => this.store.dispatch(this.modalActions.dismissed(reason)))
      .then(() => this.state.modalRef = undefined);

    this.store.dispatch(this.modalActions.opened(options.cmpType.name));
  }

  public close(reason?: string) {
    if (this.state.modalRef) {
      this.state.modalRef.close(reason);
    }
  }

  public dismiss(reason?: string | ModalDismissReasons) {
    if (this.state.modalRef) {
      this.state.modalRef.dismiss(reason);
    }
  }

}
