import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import  firebase  from "firebase";
import { AngularFireAuth } from "angularfire2/auth";

import { RegisterPage } from '../register/register';
import {SuccesfulPage} from '../succesful/succesful'



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
    private alertCtrl: AlertController,
    public navCtrl: NavController) {
  }

  loginWithFacebook(){
    this.fire.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
    .then( () => {
      this.fire.auth.getRedirectResult().then(res => {
      this.provider.loggedin = true;
      this.provider.name= res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
      this.ref.detectChanges();
      });
    })
  }

  loginWithTwitter(){
    this.fire.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider())
    .then( () => {
      this.fire.auth.getRedirectResult().then(res => {
      this.provider.loggedin = true;
      this.provider.name= res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
      this.ref.detectChanges();
      });
    })
  }

  loginWithGoogle(){
    this.fire.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    .then( () => {
      this.fire.auth.getRedirectResult().then(res => {
      this.provider.loggedin = true;
      this.provider.name= res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
      this.ref.detectChanges();
    });
    })
  }

  alert(message:string){
    this.alertCtrl.create({
      title: 'Alert',
      subTitle: message,
      buttons: ['OK']
    }).present();
    
  }

  login(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.pass.value)
    .then(data => {
        console.log("obtener dato", this.fire.auth.currentUser);
        this.alert('You are logged');
        this.navCtrl.push(SuccesfulPage);
    })
    .catch(error => {
      console.log('obtener error', error)
    })
}

register(){
  this.navCtrl.push(RegisterPage);
}

  logout(){
    this.fire.auth.signOut();
    this.provider.loggedin= false;
  }

}
