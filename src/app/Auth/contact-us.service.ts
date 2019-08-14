import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ContactUs } from './contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private firestore : AngularFirestore) { }

  getContact()
  {
    return this.firestore.collection('contactUs').snapshotChanges();
  }

  createContact(contact:ContactUs)
  {
    return this.firestore.collection('contactUs').add(contact);
  }

  updateContact(contact:ContactUs)
  {
    delete contact.id;
    this.firestore.doc('contactUs/'+contact.id).update(contact);
  }

  deleteContact(contactId:string)
  {
    this.firestore.doc('contactUs/'+contactId).delete();
  }
}

