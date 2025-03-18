import { Component, input, OnInit } from '@angular/core';
import { IProduct } from '../../../models/i-product';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-component',
  imports: [
    JsonPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  readonly product = input<IProduct>();
  data= input();

  ngOnInit(): void {
    console.log('ProductComponent...');
    console.log(this.product());
  }

}
