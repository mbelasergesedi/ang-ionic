import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService, User } from '../shared/code.service';

@Component({
  selector: 'app-votrecode',
  templateUrl: './votrecode.component.html',
  styleUrls: ['./votrecode.component.scss'],
})
export class VotrecodeComponent {
  form: FormGroup;
  code: any;
  myResponse;


  constructor(
    private formBuilder: FormBuilder,
    private codeService: UserService) { }
  private votrecode: Observable<User>;
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.form = this.formBuilder.group({
      votrecode: ['', [Validators.required, Validators.maxLength(12)]]
    });

  }
  submit() {
    if (this.form.valid) {
      const code = (this.form.value.votrecode);
      this.code = this.codeService.getCode(code).subscribe((data) => {
        this.myResponse = data;
      });
    }
  }
}
