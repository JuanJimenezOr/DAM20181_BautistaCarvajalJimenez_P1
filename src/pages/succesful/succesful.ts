import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the SuccesfulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-succesful',
  templateUrl: 'succesful.html',
})
export class SuccesfulPage {

  email : string;

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccesfulPage');
  }
  

}
