import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterProvider } from '../../providers/register/register'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mKey: string;

  constructor(public navCtrl: NavController, private reg: RegisterProvider) {
    this.onInit()
  }

  onInit(){
    this.getMKey()
  }

  getMKey(){
    this.reg.getMKey().then( (mKey) => {
      this.mKey = mKey;
    })
  }

  onClickNewQR(){
    console.log("Request new QR Code")
    this.mKey = null;
    setTimeout( ()=> this.getMKey() ,1000); // debug for testing requestQueuePage
    // this.getMKey();
  }

}
