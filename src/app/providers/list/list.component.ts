import { Component } from '@angular/core';
import { CardProviderComponent } from '../../shared/components/card-provider/card-provider.component';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CardProviderComponent, PaginatorComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent { 
  constructor(private router:Router){

  }
 navigateToNewUser(){
  this.router.navigate(['/nuevo-usuario'])
 }
}
