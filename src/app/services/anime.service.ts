import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http : HttpClient) { }

  link ="https://api.jikan.moe/v3/search/anime"

  getAnime(search : string){
    return this.http.get(this.link, {
      params: {'q': search}
    })
  }

}
