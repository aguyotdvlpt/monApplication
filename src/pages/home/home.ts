import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // Création de la fonction permettant d'aller sur la page about

  goToAbout() {
      //On change la page d'accueil par la page à propos au clic sur le bouton
    this.navCtrl.setRoot(AboutPage);
    
  }

}
