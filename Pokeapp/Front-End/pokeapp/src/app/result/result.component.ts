// result.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-resultat',
    templateUrl: 'result.component.html'
})
export class ResultComponent {
  @Input() pokemonData: any;

  constructor(private route: ActivatedRoute) {
    // Récupérer les informations du Pokémon passées via la navigation
    this.pokemonData = this.route.snapshot.params['pokemonData'];
    const storedPokemonData = sessionStorage.getItem('randomPokemonData');
    if (storedPokemonData) {
      this.pokemonData = JSON.parse(storedPokemonData);
      sessionStorage.removeItem('randomPokemonData');
    }
    
  }
}



