import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable()
export class AuthService {
  constructor(private firestore: AngularFirestore){}
    createNewUser(email: string, password: string) {
        return new Promise(
          (resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(
              () => {
                resolve('Done');
              },
              (error) => {
                reject(error);
              }
            );
          }
        );
    }
    signInUser(email: string, password: string) {
        return new Promise(
          (resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password).then(
              () => {
                resolve();
              },
              (error) => {
                reject(error);
              }
            );
          }
        );
    }

    signOutUser() {
        firebase.auth().signOut();
    }
}
