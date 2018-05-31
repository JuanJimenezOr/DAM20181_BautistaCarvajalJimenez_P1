import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import  firebase  from "firebase";
import { AngularFireAuth } from "angularfire2/auth";

import { RegisterPage } from '../register/register';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('user') user;
  @ViewChild('pass') pass;

  provider = {
    loggedin : false,
    name: '',
    profilePicture:'',
    email:''
  }


  constructor(private fire: AngularFireAuth,
    public ref: ChangeDetectorRef,
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

  loginWithTwitter(){
    this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
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

  login(){
  console.log('entro con ', this.user.value, this.pass.value)
}

register(){
  this.navCtrl.push(RegisterPage);
}

  logout(){
    this.fire.auth.signOut();
    this.provider.loggedin= false;
  }

}
