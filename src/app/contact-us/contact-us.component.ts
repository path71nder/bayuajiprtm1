import { ContactUsService } from './../Auth/contact-us.service';
import { ContactUs } from './../Auth/contactUs';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms' ;


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  Contacts: ContactUs[] ;
  form = new FormGroup({
    name: new FormControl('' , Validators.required) ,
    email: new FormControl('' , [Validators.required , Validators.email]) ,
    message: new FormControl('' , Validators.required)
  }) ;


  constructor(private contactService:ContactUsService) { }

  ngOnInit() {
    this.contactService.getContact().subscribe(data => {
      this.Contacts = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as ContactUs;
      })
    })
  }

  send() {
    this.contactService.createContact(this.form.value)
    this.form.reset() ;
  }

  // close() {
  //   this.clicked=false ;
  //   this.form.reset() ;
  // }

  // getName(){return this.form.get('name');}
  // getEmail(){return this.form.get('email');}
  // getMessage(){return this.form.get('message');}

}
