import {Component, Input, HostBinding} from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {Angulartics2} from 'angulartics2';
import {Router} from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'card',
  styleUrls: [ './card.component.scss' ],
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input('title') public title: string;
  @Input('tag') public tag: string;
  @Input('url') public url: string;
  @Input('imgClass') public imgClass: string;

  @HostBinding('class') class = 'col-md-4 col-sm-6 col-xs-12 fadeInLeft animated';


  constructor(private angulartics2: Angulartics2, private router: Router) {

  }

  handleClick() {
    this.angulartics2.eventTrack
    .next({ action: `${this.tag}ImageClick`, properties: { category: 'HomePage' }});
  }

  ngOnInit() {
    console.log(`title=${this.title}`);
  }
}
