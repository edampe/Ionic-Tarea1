import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PERSONAJES } from '../../data/personajes.data';
import { Pagina2Page } from '../index.paginas';



@Component({
  selector: 'page-tabs1',
  templateUrl: 'tabs1.html',
})
export class Tabs1Page {

  copiaPersonaje = PERSONAJES

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.copiaPersonaje);
    
  }

  verPersonaje(personaje: any){

    this.navCtrl.push(Pagina2Page, { personaje })

  }

  


}
