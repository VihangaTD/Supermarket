import { Component, OnInit } from '@angular/core';
import { DashboardHeader } from './dashboard-header/dashboard-header';
import { Item } from './Item';
import { CurrencyPipe, NgClass, UpperCasePipe, NgStyle } from "@angular/common";

@Component({
  selector: 'app-dashboard',
  // standalone: true,
  imports: [DashboardHeader, NgClass, CurrencyPipe, UpperCasePipe, NgStyle],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  
  numberOfCustomer:number = 540;
  numberOfItems:number = 1200;
  numberOfSuppliers:number = 10;

  isShow:boolean = false;

  itemList:Item[]=[
    {
      code:'P001',
      description:'Product 1',
      price:100,
      qtyHand:0
    },
    {
      code:'P002',
      description:'Product 2',
      price:200,
      qtyHand:0
    },
    {
      code:'P003',
      description:'Product 3',
      price:300,
      qtyHand:30
    },
    {
      code:'P004',
      description:'Product 4',
      price:400,
      qtyHand:40
    },
    {
      code:'P005',
      description:'Product 5',
      price:500,
      qtyHand:0
    },
  ]

  toggleButtonClick():void{
    this.isShow = !this.isShow;
  }
}
