import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() total = ''
  @Input() inputs = ''
  @Input() ouputs = ''
  @Input() variant: 'orange' | 'violet' = 'orange'
}
