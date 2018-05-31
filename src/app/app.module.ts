import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HttpModule } from "@angular/http";
import { RegisterPage } from '../pages/register/register';


var config = {
  apiKey: "AIzaSyD19nNRuYSZjUA1k8BnUC4uEnnZ6-lo4EE",
  authDomain: "dam-logins.firebaseapp.com",
  databaseURL: "https://dam-logins.firebaseio.com",
  projectId: "dam-logins",
  storageBucket: "dam-logins.appspot.com",
  messagingSenderId: "837890507231"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RegisterPage,
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
