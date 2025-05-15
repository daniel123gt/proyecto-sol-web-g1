import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-product',
  imports: [RouterLink, RouterModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  @Input() nombre: string = '';
  @Input() codigo: string = '';
  @Input() imagen: string = '';
  @Input() stock: string = '';
}
