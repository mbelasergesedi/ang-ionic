
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TextSearchService, User } from '../shared/textsearch.service';

@Component({
  selector: 'app-search-simple',
  templateUrl: './search-simple.component.html',
  styleUrls: ['./search-simple.component.scss'],
})
export class SearchSimpleComponent {
  form: FormGroup;
  med: any;
  myResponse;


  constructor(
    private formBuilder: FormBuilder,
    private textSearchService: TextSearchService) { }
    private votretext: Observable<User>;
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.form = this.formBuilder.group({
      votretext: ['', [Validators.required]]
    });

  }
  submit() {
    if (this.form.valid) {
      const med = (this.form.value.votretext);
      this.med = this.textSearchService.getCode(med).subscribe((data) => {
        this.myResponse = data;
        console.log(data);
        console.log(this.votretext);
      });
    }
  }
}
