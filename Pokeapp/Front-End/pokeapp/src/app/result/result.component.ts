// result.component.ts
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-resultat',
    templateUrl: 'result.component.html',
})
export class ResultComponent {
  @Input() pokemonData: any;
}
