import { Component, Input } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokemon?: Pokemon;
}
