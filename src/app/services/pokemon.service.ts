import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  @Output() search: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { }
  
  getPokemon(){
    return this.http.get(`${environment.url}pokemon?offset=0&limit=151`);
  }

  pokemonData(url:any){
    return this.http.get(`${url}`);
  }

  pokemonDetail(id:string){
    return this.http.get(`${environment.url}pokemon/${id}`);
  }
  
  searchPokeom(name:string){
    return this.http.get(`${environment.url}pokemon/${name}`);
  }

  resumePokemon(id:string){
    return this.http.get(`${environment.url}pokemon-species/${id}`);
  }

}
