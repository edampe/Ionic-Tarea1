import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  personaje: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams.get('personaje'))
    this.personaje = navParams.get('personaje')
    
  }

}
