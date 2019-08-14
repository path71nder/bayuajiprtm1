import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { friends } from './friends';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private firestore: AngularFirestore) { }

  getFriends()
  {
    return this.firestore.collection('friends').snapshotChanges();
  }

  createFriends(Friends:friends)
  {
    return this.firestore.collection('friends').add(Friends);
  }
}
