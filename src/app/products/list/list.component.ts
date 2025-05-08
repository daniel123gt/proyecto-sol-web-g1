import { Component } from '@angular/core';
import { CardProductComponent } from '../../shared/components/card-product/card-product.component';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';

@Component({
  selector: 'app-list',
  imports: [CardProductComponent, PaginatorComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'


})
export class ListComponent {

}