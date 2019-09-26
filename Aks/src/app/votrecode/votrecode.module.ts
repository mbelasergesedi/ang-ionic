import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HttpParams} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VotrecodeComponent } from './votrecode.component';
import { UserService} from '../shared/code.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: VotrecodeComponent
      }
    ])
  ],
  declarations: [VotrecodeComponent],
  providers: [UserService]
})
export class VotreCodeModule {}
