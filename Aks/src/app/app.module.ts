import { NgModule } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from '../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { GrdFilterPipe } from './grd-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    IonicModule.forRoot(),
    AngularFireDatabaseModule,
    AutocompleteLibModule,
    MatTableModule,
    AutoCompleteModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    FirebaseMessaging,
    GrdFilterPipe,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
