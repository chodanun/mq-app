import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingPage } from '../pages/setting/setting';
import { RootPage } from '../pages/root/root';
import { MagazinePage } from '../pages/magazine/magazine';

// Providers
import { RegisterProvider } from '../providers/register/register'

// QR CODE
import { QRCodeModule } from 'angular2-qrcode'

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database'

const firebaseConfig: any = {
    apiKey: "AIzaSyCHs5JeIxYSc1GWnaZyoqoG1uvckyF5jT4",
    authDomain: "ciix-fusion-59c3a.firebaseapp.com",
    databaseURL: "https://ciix-fusion-59c3a.firebaseio.com",
    projectId: "ciix-fusion-59c3a",
    storageBucket: "ciix-fusion-59c3a.appspot.com",
    messagingSenderId: "958932957275"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingPage,
    RootPage,
    MagazinePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    QRCodeModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingPage,
    RootPage,
    MagazinePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    RegisterProvider,
  ]
})
export class AppModule {}
