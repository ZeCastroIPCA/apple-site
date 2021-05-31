import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AddComponent } from './components/shopping-list/add/add.component';
import { BuyComponent } from './components/shopping-list/buy/buy.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { SColorComponent } from './components/p-color/s-color/s-color.component';
import { DetailsComponent } from './components/anime/details/details.component';
import { AnimeComponent } from './components/anime/anime.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"calculator", component: CalculatorComponent},
  {path:"events", component: EventsComponent},
  {path:"shop", component: ShoppingListComponent,
  children:[
    {path:"add", component: AddComponent},
    {path:"buy", component: BuyComponent}
  ]},
  {path:"color", component: PColorComponent,
  children:[
    {path:":color", component: SColorComponent}
  ]},
  {path:"anime", component: AnimeComponent,
  children:[
    {path:":id", component: DetailsComponent}
  ]},
  {path:"404", component: ErrorComponent},
  {path:"**", redirectTo: "404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
