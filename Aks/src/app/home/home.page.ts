import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {NotificationService} from './notification.service';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';
import { AuthenticateService } from '../shared/authentication.service';
import { NavController, ModalController } from '@ionic/angular';
import { ConnectionService } from 'ng-connection-service';
@Injectable()
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  interactions: any;
  userEmail: string;
  startAt = new Subject();
  endAt = new Subject();

  status = 'Connecté à Internet';
  isConnected = true;
  
  // tslint:disable-next-line: no-shadowed-variable
  constructor(
    private InteractionService: NotificationService,
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private connectionService: ConnectionService
    ) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.getInteractionsList(this.startAt, this.endAt);
    if (this.authService.userDetails()) {
      this.userEmail = this.authService.userDetails().email;
    } else {
      this.navCtrl.navigateBack('');
    }
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = 'Connecté à Internet';
      } else {
        this.status = 'Pas de connection Internet';
      }
    });


  }

  getInteractionsList(startAt, endAt) {
    this.InteractionService.getInteractionList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(interactions => {
      this.interactions = interactions;
    });
  }
}
