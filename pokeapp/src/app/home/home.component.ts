import { Component } from "@angular/core";
import { PokemonService } from '../services/pokemon.service';
import { ApiConfigService } from '../services/api-config.service';
import { Router } from '@angular/router';

@Component({ templateUrl: 'home.component.html' }) export class HomeComponent {
  pokemonData: any;

  constructor(private pokemonService: PokemonService, private apiConfigService: ApiConfigService, private router: Router) { }

  getRandomPokemon() {

    //PokemonAléatoire 

    var idPokemon = Math.floor(Math.random() * 151) + 1;

    //Chercher les infos

    this.pokemonService.getPokemonData("" + idPokemon).subscribe(
      data => {
        this.pokemonData = data;
        console.log(data);
        sessionStorage.setItem('randomPokemonData', JSON.stringify(data));
        this.router.navigate(['/result']);
      },
      error => {
        console.log(error);
      }
    );


  }




}


