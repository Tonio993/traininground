import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';

interface User {
  uid: string;
  email: string;
}

@Injectable()
export class AuthService {

  constructor(
    private afs: AngularFirestore,
    private afa: AngularFireAuth) { }

  emailSignUp(email: string, password: string): Promise<any> {
  return this.afa.auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      return this.setUserDoc(user) // create initial user document
    })
    .catch(error => console.log(error) );
}

  emailSignIn(email: string, password: string): Promise<any> {
    return this.afa.auth.signInWithEmailAndPassword(email, password)
    .catch(err => console.log(err));
  }

  emailSignOut(): Promise<any> {
    return this.afa.auth.signOut()
    .then(() => this.afa.user.take(1).map(user => console.log(user)));
  }

    // Sets user data to firestore after succesful login
  private setUserDoc(user) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email || null
    }

    return userRef.set(data)

  }

  get user() {
    return this.afa.user;
  }

}