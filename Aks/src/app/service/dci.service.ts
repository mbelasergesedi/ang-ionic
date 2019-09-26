
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { InteractionsComponent } from '../interactions/interactions.component';
import { Injectable } from '@angular/core';

@Injectable()
export class DciSearch {

  private dbPath = '/dci';

  dciRef: AngularFireList<InteractionsComponent> = null;

  constructor(private db: AngularFireDatabase) {
    this.dciRef = db.list(this.dbPath);
  }

  createDci(interaction: InteractionsComponent): void {
    this.dciRef.push(interaction);
  }

  updateDci(key: string, value: any): Promise<void> {
    return this.dciRef.update(key, value);
  }

  deleteDci(key: string): Promise<void> {
    return this.dciRef.remove(key);
  }

  getDci(): AngularFireList<InteractionsComponent> {
    return this.dciRef;
  }

  geDciList(key: string): AngularFireList<InteractionsComponent> {
    return this.dciRef;
  }

  deleteAll(): Promise<void> {
    return this.dciRef.remove();
  }
}