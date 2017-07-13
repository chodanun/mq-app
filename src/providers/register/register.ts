import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// Firebase database
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RegisterProvider {

  constructor(public db: AngularFireDatabase) {
  
  }

  getMKey(): Promise<string> {
    return new Promise ( (res,rej) => {
       const item = this.db.list(`Register`)
       const mKey = item.push({
            branchName:"",
            key:"",
        }).key;
        console.log("mKey: "+mKey);
        res(mKey)
    })
  }

}
