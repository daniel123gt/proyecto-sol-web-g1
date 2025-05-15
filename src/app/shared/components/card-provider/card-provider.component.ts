import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-provider',
  imports: [RouterLink, RouterModule],
  templateUrl: './card-provider.component.html',
  styleUrl: './card-provider.component.css'
})
export class CardProviderComponent {
  @Input() nombre: string = '';
  @Input() codigo: string = '';
  @Input() ruc: string = '';
  @Input() direccion: string = '';
  @Input() imagen: string = '';
}
