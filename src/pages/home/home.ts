import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import  firebase  from "firebase";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private fire: AngularFireAuth,
    public navCtrl: NavController) {

  }

  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res => {
      console.log(res);
    })
  }

  logoutOfFacebook(){
    this.fire.auth.signOut();
  }

}
