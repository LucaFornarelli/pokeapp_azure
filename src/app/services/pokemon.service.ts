// pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient, private apiConfigService: ApiConfigService) {}

  getPokemonData(pokemonName: string): Observable<any> {
    const apiUrl = `${this.apiConfigService.getApiUrl()}/api/pokemon/${pokemonName}`;
    return this.http.get(apiUrl);
  }
}



