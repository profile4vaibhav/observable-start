import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private mySubscriptions: Subscription;

  constructor(
    private talkService: TalkService
  ) { }

  ngOnInit() {
    // this.mySubscriptions = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
  }

  onClick() {
    this.talkService.sendData.next('Angular');
  }

  ngOnDestroy() {
    // this.mySubscriptions.unsubscribe();
  }

}
