import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyDhTIiYx2j1h1rWjoeP5hGVYz_3GJexXnE",
  authDomain: "stationmeteo-6c4cc.firebaseapp.com",
  databaseURL: "https://stationmeteo-6c4cc.firebaseio.com",
  projectId: "stationmeteo-6c4cc",
  storageBucket: "",
  messagingSenderId: "859993943999",
  appId: "1:859993943999:web:c67909b00bde94f3"
};

firebase.initializeApp(firebaseConfig);

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

