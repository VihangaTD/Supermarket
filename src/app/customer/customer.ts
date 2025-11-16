import { Component } from '@angular/core';
import { CustomerDetails } from './customerDetails';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-customer',
  imports: [FormsModule,JsonPipe],
  templateUrl: './customer.html',
  styleUrl: './customer.scss',
})
export class Customer {
  customer:CustomerDetails={
    id:"",
    name:"",
    address:"",
    tel:""
  }

  saveCustomer():void{
    console.log(this.customer);
  }
}
