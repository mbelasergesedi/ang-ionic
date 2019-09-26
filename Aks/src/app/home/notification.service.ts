import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HomePage } from './home.page';

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private dbPath = '/notifications';

  interactionRef: AngularFireList<HomePage> = null;

  constructor(private db: AngularFireDatabase) {
    this.interactionRef = db.list(this.dbPath);
  }

  createInteraction(interaction: HomePage): void {
   this.interactionRef.push(interaction);
  }

  updateInteraction(key: string, value: any): Promise<void> {
    return this.interactionRef.update(key, value);
  }

  deleteInteraction(key: string): Promise<void> {
    return this.interactionRef.remove(key);
  }

  getInteractionList(): AngularFireList<HomePage> {
    return this.interactionRef;
  }

  deleteAll(): Promise<void> {
    return this.interactionRef.remove();
  }
}