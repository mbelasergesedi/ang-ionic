import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { InteractionsComponent } from '../interactions/interactions.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CitySearch {

  private dbPath = '/city';

  cityRef: AngularFireList<InteractionsComponent> = null;

  constructor(private db: AngularFireDatabase) {
    this.cityRef = db.list(this.dbPath);
  }

  createCity(interaction: InteractionsComponent): void {
    this.cityRef.push(interaction);
  }

  updateCity(key: string, value: any): Promise<void> {
    return this.cityRef.update(key, value);
  }

  deleteCity(key: string): Promise<void> {
    return this.cityRef.remove(key);
  }

  getCity(): AngularFireList<InteractionsComponent> {
    return this.cityRef;
  }

  getCityList(key: string): AngularFireList<InteractionsComponent> {
    return this.cityRef;
  }

  deleteAll(): Promise<void> {
    return this.cityRef.remove();
  }
}
