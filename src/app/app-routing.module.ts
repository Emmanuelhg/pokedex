import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component'; 
import { PokemonContentComponent } from './pokemon-content/pokemon-content.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component'; 
import { UserComponent } from './user/user.component'; 

const routes: Routes = [
  {path: '', component: PokemonContentComponent },
  {path: 'header', component: HeaderComponent },
  {path: 'pokemon-detail/:param', component: PokemonDetailComponent },
  {path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
