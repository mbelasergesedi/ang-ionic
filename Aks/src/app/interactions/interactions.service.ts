import { AngularFirestore } from '@angular/fire/firestore';

export class OrdersService {
    constructor(   private firestore: AngularFirestore   ) {}
    getCoffeeOrders() {

        this.firestore.collection('interactions').snapshotChanges();
      }
    }
