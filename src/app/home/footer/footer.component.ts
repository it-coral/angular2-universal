import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @Input() showSearchRaces: boolean = true;

  constructor() {
  }
}
