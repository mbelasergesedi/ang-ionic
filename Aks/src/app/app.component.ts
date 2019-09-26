import { Component } from '@angular/core';
// tslint:disable-next-line: import-spacing
import { AuthenticateService } from './shared/authentication.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgxSpinnerModule } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userEmail: string;
  email: string;
  password: string;


  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Code de votre médicament',
      url: '/votrecode',
      icon: 'code'
    },
    {
      title: 'Cartographie',
      url: '/cartographie',
      icon: 'pin'
    },
    {
      title: 'Annuaire professionels',
      url: '/professionel',
      icon: 'people'
    },
    {
      title: 'Créer un compte',
      url: '/account',
      icon: 'person'
    },
    {
      title: 'Connectez-vous',
      url: '/login',
      icon: ''
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
      title: 'Recherche avancée',
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
      title: 'AksantiMed',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public authenticationService: AuthenticateService,
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
