import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Item } from '../model/model';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  itemsCollection: AngularFirestoreCollection <Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {}

  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    completed: new FormControl(false)
  });

  // Firestore CRUD actions example
  createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('interactions')
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  getCoffeeOrders() {
    return this.afs.collection('interactions').snapshotChanges();
  }

  getInteractions(start: BehaviorSubject<string>): Observable<any[]> {
    return start
    .switchMap(startText => {
      const endText = startText + '\uf8ff';
      return this.afs
        .collection('interactions', ref =>
          ref
            .orderBy('title')
            .limit(10)
            .startAt(startText)
            .endAt(endText)
        )
        .snapshotChanges()
        .debounceTime(200)
        .distinctUntilChanged()
        .map(changes => {
          return changes.map(c => {
            console.log(c);
            const data = c.payload.doc.data();
            console.log(data);
            const id = c.payload.doc.id;
            return { id, ...data };
          });
        });
    });
}
}


