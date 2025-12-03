import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from './customerDetails';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CustomerService } from '../service/customer/customer';

@Component({
  selector: 'app-customer',
  imports: [FormsModule,JsonPipe],
  templateUrl: './customer.html',
  styleUrl: './customer.scss',
})
export class Customer implements OnInit{
 
  apiData:any[]=[];
  customerService:CustomerService;

  constructor(customerService:CustomerService){
    this.customerService = customerService;
  }

  customer:CustomerDetails={
    id:0,
    name:"",
    address:"",
    tel:""
  }

  saveCustomer():void{
    console.log(this.customer);
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll():void {
    this.customerService.getApiData().subscribe((response)=>{
        this.apiData = Array.isArray(response) && response.length>0
        ? response[0].data : [];
    });
  }
}
