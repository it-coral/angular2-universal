import {Component, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.html',
  styleUrls :['./spinner.css']
})
export class SpinnerComponent implements OnDestroy {
  @Input()
  public delay: number = 300;

  private currentTimeout: number;

  public isDelayedRunning: boolean = false;



  @Input()
  public set isRunning(value: boolean) {
    if (!value) {
      this.cancelTimeout();
      this.isDelayedRunning = false;
      return;
    }

    if (this.currentTimeout) {
      return;
    }

    //this.currentTimeout = window.setTimeout(() => {
      this.isDelayedRunning = value;
      this.cancelTimeout();
    //}, this.delay);
  }

  ngOnDestroy(): any {
    this.cancelTimeout();
  }

  private cancelTimeout(): void {
    clearTimeout(this.currentTimeout);
    this.currentTimeout = undefined;
  }


}
