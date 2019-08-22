import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Votre code',
      url: '/home',
      icon: 'code'
    },
    {
      title: 'Cartographie',
      url: '/cartographie',
      icon: 'pin'
    },
    {
      title: 'Professionels',
      url: '/professionel',
      icon: 'people'
    },
    {
      title: 'Médicaments',
      url: '/medicaments',
      icon: 'medkit'
    },
    {
      title: 'Recherche simple',
      url: '/simple'
    },
    {
      title: 'Recherche complexe',
      url: '/complexe'
    },
    {
      title: 'Interactions médicamenteuses',
      url: '/interactions',
      icon: 'hand'
    },


    {
      title: 'Discussions',
      url: '/list',
      icon: 'chatboxes'
    },
    {
      title: 'Votre compte',
      url: '/account',
      icon: 'person'
    },
    {
      title: 'AksantiMed',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
