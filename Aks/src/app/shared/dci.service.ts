import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class MoviesService {
  constructor(private afs: AngularFirestore) { }
  getMovies(start: BehaviorSubject<string>): Observable<any[]> {
    return start
      .switchMap(startText => {
        const endText = startText + '\uf8ff';
        return this.afs
          .collection('movies', ref =>
            ref
              .orderBy('Title')
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
              const id = c.payload.doc.id;
              return { id, ...data };
            });
          });
      });
  }
}
