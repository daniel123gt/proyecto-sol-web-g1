import { Component } from '@angular/core';
import { CardProviderComponent } from '../../shared/components/card-provider/card-provider.component';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';
import { ModalComponent } from '../..//shared/components/modal/modal.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/components/input/input.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CardProviderComponent, PaginatorComponent, NgFor, ModalComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [''],
      email: [''],
    });
  }

  showModal = false;
  listaProveedor = [
    {
      nombre: 'COCACOLA',
      codigo: '123123',
      imagen: 'https://www.cocacolaep.com/assets/legacy-assets/Uploads/resources/Coca-Cola-1210.jpg'
    },
    {
      nombre: 'PEPSI',
      codigo: '123123',
      imagen: 'https://brandemia.org/contenido/subidas/2011/03/pepsi-a-traves-de-la-historia-960x640.jpg'
    },
    {
      nombre: 'PEPSI',
      codigo: '123123',
      imagen: 'https://brandemia.org/contenido/subidas/2011/03/pepsi-a-traves-de-la-historia-960x640.jpg'
    },
  ]
}
