import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  data: string;

  constructor(private route: ActivatedRoute, private talkService: TalkService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });

    this.talkService.sendData.subscribe((receivedData: string) => {
      this.data = receivedData;
    })
  }
}
