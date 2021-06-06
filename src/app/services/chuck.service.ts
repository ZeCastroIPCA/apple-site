import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private httpAsk : HttpClient) {

  }

 piadaDoServico ="Veio do Servico";

 randomJokeLink = "https://api.chucknorris.io/jokes/random";
 searchJokeLink= "https://api.chucknorris.io/jokes/search";
 getRandom(){
   return this.httpAsk.get(this.randomJokeLink);
 }

 getSeach(search: string){
   return this.httpAsk.get(this.searchJokeLink, {
     params:{'query': search}
   });
 }
}
