import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}

  track(collection : string, document : string) : Observable<any> {
    return this.firestore.collection(collection).doc(document).valueChanges();
  }

  load(collection : string, document : string) : Observable<any> {
    return this.firestore.collection(collection).doc(document).get().map((doc) => doc.data());
  }

  save(collection : string, document : string, value : any) : Promise<any> {
    return this.firestore.collection(collection).doc(document).set(value);
  }

  update(collection : string, document : string, value : any) : Promise<any> {
    return this.firestore.collection(collection).doc(document).update(value);
  }

}