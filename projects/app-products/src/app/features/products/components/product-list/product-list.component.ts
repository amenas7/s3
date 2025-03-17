import { ProductService } from './../../services/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/i-product';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { MFRouterLinkDirective } from './../../../../shared/directives/MFRouterLinkDirective';
import { MFNavigateService } from '../../../../shared/services/MFNavigateService';
import { GLOBAL_MFA_PRODUCTS_EVENTS } from '../../../../constants/events.constants';

@Component({
  selector: 'app-product-list',
  imports: [
    AsyncPipe,
    CurrencyPipe,
    MFRouterLinkDirective
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products$?:Observable<IProduct[]>

  productService=inject(ProductService);
  mfNavigateService=inject(MFNavigateService);

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.findAll();
  }

  findAll(){
    console.log('findAll ... ')
    this.products$=this.productService.findAll();
  }

  reservar(product:IProduct){
     window.dispatchEvent(
      //new CustomEvent('mfProductReserved', {
        new CustomEvent(GLOBAL_MFA_PRODUCTS_EVENTS.PRODUCT_RESERVED_EVENT, {
        detail: {
          product:product,
          quantity:1
        },
      })
    );

  }

  details(product:IProduct){
    this.mfNavigateService.navigate('products/details/'+product.id, { queryParams: null});
  }

}
