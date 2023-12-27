import { Component } from "@angular/core";
import { PokemonService } from '../services/pokemon.service';
import { ApiConfigService } from '../services/api-config.service';

@Component({ templateUrl: 'home.component.html'}) export class HomeComponent {
  pokemonData: any;

  constructor(private pokemonService: PokemonService, private apiConfigService: ApiConfigService) { }

  getRandomPokemon() {
    // Générer un nom de Pokemon aléatoire (à adapter selon votre logique)
    const randomPokemonName = "pikachu"; // Remplacez ceci par votre logique de génération aléatoire
    alert(this.pokemonService.getPokemonData(randomPokemonName));
  
    this.pokemonService.getPokemonData(randomPokemonName).subscribe(
      data => {
        this.pokemonData = data;
        console.log('Réponse de l\'API:', data);
      },
      error => {
        console.error('BLOUPAX Erreur lors de l\'appel à l\'API:', error);
      }
    );
  }
  
    
  

  logApiUrl() {
    const apiUrl = this.apiConfigService.getApiUrl();
    console.log('URL de l\'API:', apiUrl);
  }
}
