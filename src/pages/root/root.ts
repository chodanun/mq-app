import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import { SettingPage } from '../setting/setting'
import { MagazinePage } from '../magazine/magazine'

/**
 * Generated class for the RootPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-root',
  templateUrl: 'root.html',
})
export class RootPage {
  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HomePage;
    this.tab2 = MagazinePage;
    this.tab3 = SettingPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RootPage');
  }

}
