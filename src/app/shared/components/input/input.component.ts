import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';   // 👈 IMPORTANTE

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, NgIf, ReactiveFormsModule],   // 👈 AGREGA AQUÍ
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() id: string = '';
}
