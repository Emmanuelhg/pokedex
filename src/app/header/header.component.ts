import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { PokemonService  } from '../services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() data:any
  searchPokemon:any;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  searchPk(name:any){
  
    let nombre = (document.getElementById("search") as HTMLInputElement).value;
    console.log(name)
    this.pokemonService.searchPokeom(nombre)
    .subscribe(resp=>{
      this.searchPokemon = resp;
      this.pokemonService.search.emit({
        data:this.searchPokemon
      });
    })

  }

}
