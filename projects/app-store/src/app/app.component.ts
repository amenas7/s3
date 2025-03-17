import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, inject, Injector, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { IProduct } from '../../../app-products/src/app/features/products/models/i-product';
import { JsonPipe } from '@angular/common';
// import { ProductComponent } from '../../../app-products/src/app/features/products/components/components/product/product.component';
import { ProductComponent } from '../../../app-products/src/app/features/products/components/product.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    JsonPipe,
    ProductComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit{
  title = 'app-store';

  injector=inject(Injector);

  private router= inject(Router);

  product?:IProduct
  quantity:number=0;

  ngOnInit(): void {

      /*
      console.log('ngOnInit...')

      loadRemoteModule('appProducts', './Component').then((m) => {
        const ce = createCustomElement(
          m.AppComponent, {
            injector: this.injector
          }
        );

        if (!customElements.get('app-root')) {


          customElements.define('mfe-app-products', ce); // Rendirización
        }

      }).catch((err:any) => console.log(err));
       */
      window.isHost = true;
      window.language='es';

  }

  @HostListener('window:mfRouteChanged', ['$event'])
     onMFChildRouteChanged(event: any) {
      console.log('Host window:mfRouteChanged...')
      console.log(event.detail.route)
      console.log(event.detail.extras)

      this.router.navigate([event.detail.route], event.detail.extras);
     }

     @HostListener('window:mfProductReserved', ['$event'])
     onMFProductReserved(event: any) {

      console.log('Host window:mfProductReserved...')
      console.log(event.detail.product)
      console.log(event.detail.quantity)

      this.product=event.detail.product
      this.quantity=event.detail.quantity

    }

     
}
