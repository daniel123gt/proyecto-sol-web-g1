import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { TableComponent } from '../../shared/components/table/table.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  columns = [
    { field: 'proveedor', header: 'Proveedor' },
    { field: 'description', header: 'Descripcion' },
    { field: 'quatity', header: 'Cantidad' },
    { field: 'total', header: 'Total' },
    { field: 'date', header: 'Fecha' },
  ];

  data = [
    { proveedor: 'Coca Cola', description: 'Gaseosa', quatity: '12', total: '200 s/', date: '14/12/2025' },
    { proveedor: 'Coca Cola', description: 'Gaseosa', quatity: '12', total: '200 s/', date: '14/12/2025' },
    { proveedor: 'Coca Cola', description: 'Gaseosa', quatity: '12', total: '200 s/', date: '14/12/2025' },
    { proveedor: 'Coca Cola', description: 'Gaseosa', quatity: '12', total: '200 s/', date: '14/12/2025' },
  ];
}
