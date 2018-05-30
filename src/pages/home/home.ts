import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import  firebase  from "firebase";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  facebook = {
    loggedin: false,
    name: '',
    profilePicture:'',
    email:''
  }

  constructor(private fire: AngularFireAuth,
    public navCtrl: NavController) {

  }

  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res => {
      this.facebook.loggedin = true;
      this.facebook.name= res.user.displayName;
      this.facebook.email = res.user.email;
      this.facebook.profilePicture = res.user.photoURL;

    })
  }

  logoutOfFacebook(){
    this.fire.auth.signOut();
    this.facebook.loggedin= false;
  }

}
