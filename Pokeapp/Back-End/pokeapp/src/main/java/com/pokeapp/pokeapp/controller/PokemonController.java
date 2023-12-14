package com.pokeapp.pokeapp.controller;

import com.pokeapp.pokeapp.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pokemon")
@CrossOrigin(origins = "*")
public class PokemonController {

    private final PokemonService pokemonService;

    @Autowired
    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    @GetMapping("/{pokemonName}")
    public ResponseEntity<String> getPokemonData(@PathVariable String pokemonName) {
        String result = pokemonService.getPokemonData(pokemonName);
        return ResponseEntity.ok(result);
    }
}
