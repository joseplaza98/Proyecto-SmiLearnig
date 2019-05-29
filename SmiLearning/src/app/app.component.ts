import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { LoginPage } from '../pages/Sesion/login/login';

var config={
  apiKey: "AIzaSyD6AgQGFO9KMRQIU9sQvLHn84PgEHbGYHk",
  authDomain: "chatsml.firebaseapp.com",
  databaseURL: "https://chatsml.firebaseio.com",
  projectId: "chatsml",
  storageBucket: "chatsml.appspot.com",
  messagingSenderId: "410148902782"
};


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
      firebase.initializeApp(config);
  }


}
