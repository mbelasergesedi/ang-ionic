import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HttpParams} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchSimpleComponent } from './search-simple.component';
import { TextSearchService } from '../shared/textsearch.service';


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
        component: SearchSimpleComponent
      }
    ])
  ],
  declarations: [SearchSimpleComponent],
  providers: [TextSearchService]
})
export class SearchSimpleModule {}
