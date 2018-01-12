import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(titleService: Title ) {
    titleService.setTitle('Home');
  }

  ngOnInit() {
    console.log('hello `Home` component');
  }
}
