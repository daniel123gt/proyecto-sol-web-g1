import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TableComponent } from '../../shared/components/table/table.component';

@Component({
  selector: 'app-detail',
  imports: [NgFor, TableComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
    detail = [
      {field: 'Razón social', value: 'COCA COLA SAC'},
      {field: 'RUC', value: '20392039203'},
      {field: 'Sede Principal', value: 'Av Aviacion 2006, Lima'},
      {field: 'Atencion al cliente', value: '019290'},
      {field: 'Email', value: 'correo@asd.com'},
      {field: 'Asesor de Contanto', value: 'Alicia Maravilla'},
      {field: 'Contacto del Asesor', value: '936472837'},

    ]
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
