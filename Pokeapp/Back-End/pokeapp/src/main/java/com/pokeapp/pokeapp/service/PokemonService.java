package com.pokeapp.pokeapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PokemonService {

    private final RestTemplate restTemplate;

    @Autowired
    public PokemonService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getPokemonData(String pokemonName) {
        String apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
        return restTemplate.getForObject(apiUrl, String.class);
    }
}
