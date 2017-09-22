import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shift: any;
  constructor(public navCtrl: NavController) {
    this.shift = {
      clockedIn: true
    }
  }

  toggle() {
    this.shift.clockedIn = !this.shift.clockedIn;
  }

}
