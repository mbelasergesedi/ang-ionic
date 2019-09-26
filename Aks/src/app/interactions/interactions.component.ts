import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { DciSearch } from '../service/dci.service';
import { InteractionSearch } from '../service/interaction.service';
import { ResultatInteractionService } from '../shared/resultatInteraction.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.scss'],
})
export class InteractionsComponent {
  reactiveForm: FormGroup;
  public dci = [];
  public MyDci = [];


  public keyword = 'ATCNM_F';
  public historyHeading = 'Recemment selectioné';
  interactionRef;
  dciRef;
  myResponse: any;
  code: any;

  constructor(private dciSearch: DciSearch, private interactionSearch: InteractionSearch,
              private resultatInteractionService: ResultatInteractionService,
              private formBuilder: FormBuilder) {
    this.reactiveForm = formBuilder.group({
      name: ['', Validators.required]
    });
  }
  form: FormGroup;
  event: any;
  dciToGet: any;

  save_outage_index() {

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

    this.geDciList();
    this.geInteractionList();

  }
  geDciList() {
    this.dciSearch.getDci().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(dci => {
      this.dciRef = dci;
      this.dci = dci;
    });
  }

  geInteractionList() { }

  submitReactiveForm() {
    if (this.reactiveForm.valid) {

      this.dciToGet = this.reactiveForm.value;
      console.log(this.dciToGet.name.ATCNM_F);
      //this.dciToGet = this.dciToGet.name.key;

      const code = this.dciToGet.name.ATCNM_F;
      this.code = this.resultatInteractionService.getAllInteraction(this.dciToGet.name.ATCNM_F).subscribe((data) => {
        this.myResponse = data;
        //console.log(data);
      });
    }
  }

}
