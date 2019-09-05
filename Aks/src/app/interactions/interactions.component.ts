import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from '../shared/orders.service';
import {FilterPipe} from './filter.pipe';
@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.scss'],
})
export class InteractionsComponent implements OnInit {

  private ordersService: OrdersService;
  name = '';
  reactiveForm: FormGroup;
  public placeholder = 'Entrer un DCI';
  public keyword = 'name';
  public historyHeading = 'Recemment selectioné';
  public countriesTemplate = ['Albania', 'Andorra', 'Armenia', 'Austria'];


  // tslint:disable-next-line: variable-name
  constructor(_fb: FormBuilder) {
    this.reactiveForm = _fb.group({
      name: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  submitTemplateForm(value) {
    console.log(value);
  }
  submitReactiveForm() {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
    }
  }
  
}


  // constructor(private ordersService: OrdersService) { }

 // coffeeOrders;
 // ngOnInit() {
 //   this.getCoffeeOrders();
 // }

 // getCoffeeOrders = () =>
 //   this.ordersService
 //     .getCoffeeOrders()
 //     .subscribe(res => (this.coffeeOrders = res))
// }
