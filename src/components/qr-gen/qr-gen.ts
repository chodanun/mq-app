import { Component, Input } from '@angular/core';

/**
 * Generated class for the QrGenComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'qr-gen',
  templateUrl: 'qr-gen.html'
})
export class QrGenComponent {

  @Input() mKey: string;

  constructor() {
    console.log('Hello QrGenComponent Component');
    
  }

}
