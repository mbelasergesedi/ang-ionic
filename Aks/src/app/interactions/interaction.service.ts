import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { InteractionsComponent } from './interactions.component';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class InteractionSearch {

  private dbPath = '/dci';

  interactionRef: AngularFireList<InteractionsComponent> = null;

  constructor(private db: AngularFireDatabase) {
    this.interactionRef = db.list(this.dbPath);
  }

  createInteraction(interaction: InteractionsComponent): void {
    this.interactionRef.push(interaction);
  }

  updateInteraction(key: string, value: any): Promise<void> {
    return this.interactionRef.update(key, value);
  }

  deleteInteraction(key: string): Promise<void> {
    return this.interactionRef.remove(key);
  }

  getInteractionList(): AngularFireList<InteractionsComponent> {
    return this.interactionRef;
  }


  deleteAll(): Promise<void> {
    return this.interactionRef.remove();
  }
}