import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CitySearch} from '../service/city.service';
// tslint:disable-next-line: import-spacing
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
@Component({
  selector: 'app-signup',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;
  cityRef: any;
  city: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private citySearch: CitySearch,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  geDciList() {
    this.citySearch.getCity().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(city => {
      this.cityRef = this.city;
      this.city = city;
      console.log(this.city);
    });
  }
  onSubmit() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;

    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
