import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MFRouterLinkDirective } from '../../../shared/directives/MFRouterLinkDirective';

@Component({
  selector: 'app-product',
  imports: [
    RouterOutlet,
    RouterLink,
    MFRouterLinkDirective
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
