import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { InteractionService } from './interaction.service';

import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
@ Component ({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.scss'],
})

export class InteractionsComponent implements OnInit {

  interactions: any;
  startAt = new Subject();
  endAt = new Subject();
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private InteractionService: InteractionService) { }

  ngOnInit() {
    this.getInteractionsList(this.startAt, this.endAt);

  }

  getInteractionsList(startAt, endAt) {
    this.InteractionService.getInteractionList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(interactions => {
      this.interactions = interactions;
      console.log (interactions);
    });
  }



}
