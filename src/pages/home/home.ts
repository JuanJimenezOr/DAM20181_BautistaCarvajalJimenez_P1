import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import  firebase  from "firebase";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  provider = {
    loggedin : false,
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
      this.provider.loggedin = true;
      this.provider.name= res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;

    })
  }

  loginWithGoogle(){
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( res => {
      this.provider.loggedin = true;
      this.provider.name= res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;

    })
  }

  logout(){
    this.fire.auth.signOut();
    this.provider.loggedin= false;
  }

}
