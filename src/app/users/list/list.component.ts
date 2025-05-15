import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

@Component({
  standalone: true,
  selector: 'app-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './list.component.html',
  
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(private router: Router) {}
  nuevoUsuario() {
    this.router.navigate(['/users/form']);
  }
}
