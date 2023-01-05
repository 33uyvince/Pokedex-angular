import { Component } from '@angular/core';
import { pokemonList } from '../mock/pokemon.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pokemonList = pokemonList;
}
