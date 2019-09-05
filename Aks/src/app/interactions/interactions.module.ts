import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InteractionsComponent } from './interactions.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    AutocompleteLibModule,
    IonicModule,

    RouterModule.forChild([
      {
        path: '',
        component: InteractionsComponent
      }
    ])
  ],
  declarations: [InteractionsComponent]
})
export class InteractionsModule {}
