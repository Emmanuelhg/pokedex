import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any[] = []; 

  constructor() { }
 
  ngOnInit(): void {
    this.user.push({
      name: 'Emmanuel',
      nivel: 40,
      edad: 26,
      apodo: 'EmmaMaster',
      id: 2355,
      img: 'https://www.nintenderos.com/wp-content/uploads/2018/09/destacada-GO-e1538154638167.jpg',
      pokemon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      namepokemon: 'charmander'   
    });
  }

}
