import { FriendsService } from './../Auth/friends.service';
import { friends } from './../Auth/friends';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  // datafriends: any[];
  Friends: friends[] ;
  phoneNumber = "^((\\+62-?)|0)?[0-9]{11}$";
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contact: new FormControl('', [Validators.required, Validators.pattern(this.phoneNumber)])
  });

  constructor(private FriendsService:FriendsService) { }

  ngOnInit() {
    this.FriendsService.getFriends().subscribe(data => {
      this.Friends = data.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }as friends;
      })
    })
  }


  send() {
    this.FriendsService.createFriends(this.form.value)
    this.form.reset()

  }

  search(string) {
    console.log(string) ;
  }

}
