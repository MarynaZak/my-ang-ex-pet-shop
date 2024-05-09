import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CatComponent } from './components/cats/cats.component';
import { DogComponent } from './components/dogs/dogs.component';
import { CatFoodComponent } from './components/cat-food/cat-food.component';
import { CatBowlsComponent } from './components/cat-bowls/cat-bowls.component';
import { CatToysComponent } from './components/cat-toys/cat-toys.component';
import { DogFoodComponent } from './components/dog-food/dog-food.component';
import { DogBowlsComponent } from './components/dog-bowls/dog-bowls.component';
import { DogToysComponent } from './components/dog-toys/dog-toys.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cats', component: CatComponent},
    {path: 'dogs', component: DogComponent},
    {path: 'cats/food', component: CatFoodComponent},
    {path: 'cats/bowls', component: CatBowlsComponent},
    {path: 'cats/toys', component: CatToysComponent},
    {path: 'dogs/food', component: DogFoodComponent},
    {path: 'dogs/bowls', component: DogBowlsComponent},
    {path: 'dogs/toys', component: DogToysComponent},
    {path: 'cart', component: CartComponent}
]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const components = [HomeComponent, CatComponent, DogComponent, CatFoodComponent, CatBowlsComponent,
    CatToysComponent, DogFoodComponent, DogBowlsComponent, DogToysComponent, CartComponent]