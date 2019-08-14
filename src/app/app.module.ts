import { AuthService } from './Auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';



import { ContactUsService } from './Auth/contact-us.service';
import { FriendsService } from './Auth/friends.service';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignupComponent } from './signup/signup.component';
import { FriendsComponent } from './friends/friends.component';
import { FilterdataPipe } from './filterdata.pipe';
// import { VerifyemailComponent } from './verifyemail/verifyemail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactUsComponent,
    SignupComponent,
    NotFoundComponent,
    FriendsComponent,
    VerifyemailComponent,
    FilterdataPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path:'home', component:HomeComponent },
      { path:'friends', component:FriendsComponent },
      { path:'contact-us',component:ContactUsComponent } ,
      { path:'sign-up', component:SignupComponent },
      { path:'**', component:NotFoundComponent } ,
      { path:'Verifyemail' ,component:VerifyemailComponent} ,

    ]) ,
  ],
  providers: [AuthService , FriendsService , ContactUsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
