import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService  } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemonData:any[] = [];
  type:any[] = [];
  hp:any; 
  attack:any;
  defense:any;
  specialAttack:any;
  specialDefense:any;
  speed:any;
  detail_one:any;
  fav:any;
  preload:boolean = false;

  constructor(private activateRoute: ActivatedRoute,
              private pokemonService: PokemonService,
              private router: Router) { }

  ngOnInit(): void {
    this.preload = true;
    let params = this.activateRoute.snapshot.params["param"]
    this.getPokemon(params);
    this.resumenPokemon(params);
    this.fav = JSON.parse(localStorage.getItem("favorites")!);
  }

  resumenPokemon(id:any){
    this.pokemonService.resumePokemon(id)
    .subscribe(resp=>{
      // console.log(resp)
      let resulteP:any = resp;
      for(let f in resulteP){
        this.detail_one = resulteP.flavor_text_entries[6].flavor_text;
      }
      // console.log(this.detail_one)
    })
    this.preload = false;
  }

  getPokemon(id:any){
    this.pokemonService.pokemonDetail(id)
    .subscribe(resp=>{

      let og:any;
      let resulteP:any = resp;
      let typeP;

      for(let f in resulteP){
        og = resulteP;
        let type = resulteP.types;
        this.type = type;
        this.hp = resulteP.stats[0].base_stat;
        this.attack = resulteP.stats[1].base_stat;
        this.defense = resulteP.stats[2].base_stat;
        this.specialAttack = resulteP.stats[3].base_stat;
        this.specialDefense = resulteP.stats[4].base_stat;
        this.speed = resulteP.stats[5].base_stat;
      }       
      // console.log(this.hp);
      this.pokemonData.push({
        name: og.name,
        img: og.sprites.front_default,
        id: og.id
      })
      // console.log(this.pokemonData)
    })
  }

  favorites(id:any){
    
   
    let favorites:any = [];
    let  fav = JSON.parse(localStorage.getItem("favorites")!);


    if(fav == null){
  
      const addFavorites = favorites.push(id)
      console.log(favorites)
      localStorage.setItem('favorites', JSON.stringify(favorites));

    }else{
     
      favorites = JSON.parse(localStorage.getItem("favorites")!);
      const addFavorites = favorites.push(id)
      console.log(favorites)
      localStorage.setItem('favorites', JSON.stringify(favorites));
      

    }  
   
  }
}
