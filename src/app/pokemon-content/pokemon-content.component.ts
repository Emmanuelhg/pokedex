import { Component, OnInit } from '@angular/core';
import { PokemonService  } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-content',
  templateUrl: './pokemon-content.component.html',
  styleUrls: ['./pokemon-content.component.css']
})
export class PokemonContentComponent implements OnInit {

  pokemon:any;
  urlPk:any;
  pokemonData:any[] = [];
  pageActual: number = 1;
  preload:boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.preload = true;
    this.getPokemons();
    this.search();
    
  }

  getPokemons(){
    this.pokemonService.getPokemon()
    .subscribe(resp=>{

      let resul:any = resp;

      for(let i in resul){
        this.pokemon = resul.results;
      }
      this.urlpokemons(this.pokemon)
      // console.log(this.pokemon)
    })
  }

  urlpokemons(pokemonUrl:any){
    
    let resul:any = pokemonUrl;

    for(let i in resul){

      this.urlPk = resul[i].url;

      this.pokemonService.pokemonData(this.urlPk)
      .subscribe(resp=>{

        let og:any;
        let resulteP:any = resp

        for(let f in resulteP){
          og = resulteP;
        }       

        this.pokemonData.push({
          name: og.name,
          img: og.sprites.front_default,
          id: og.id
        })
  
      })
      
    }
    this.preload = false;
  }

  search(){
    let preload = true;
    this.pokemonService.search.subscribe(data=>{

      if(data){
        console.log("hay data")
        let result:any = data;
        let erg:any;

        for(let i in result){
          erg = result;
        }

        let searchPk:any[] = []; 

        searchPk.push({
          name: erg.data.name,
          img: erg.data.sprites.front_default,
          id: erg.data.id
        })
        this.pokemonData = searchPk;
        // console.log(this.pokemonData)
      }else if(data.previous == null){
        console.log("no hay data")
        this.getPokemons();
      }
        
    })
  }

}
