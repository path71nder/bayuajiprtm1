import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  });

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
