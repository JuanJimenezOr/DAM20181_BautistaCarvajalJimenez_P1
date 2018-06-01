import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('user') user;
  @ViewChild('pass') pass;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message:string){
    this.alertCtrl.create({
      title: 'Alert',
      subTitle: message,
      buttons: ['OK']
    }).present();
    
  }

  registerUser(){
  this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.pass.value)
    .then(data => {
        console.log("obtener dato", data);
        this.alert('Complete')
    })
    .catch(error => {
      console.log('obtener error', error)
      this.alert(error.message);
    })
  }
  

}
