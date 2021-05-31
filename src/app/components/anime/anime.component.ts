import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  constructor(private service : AnimeService) { }

  ngOnInit(): void {
  }

  animes: any
  getAnimes(search : string){
    this.service.getAnime(search).subscribe(data => {this.animes = data
        this.animes.results.forEach((element: { title: any, synopsis : any }) => {
          console.log(element.title)
          console.log(element.synopsis)
        })
      })
  }

  show(div : HTMLDivElement){
    div.style.display="flex"
  }

  unshow(div : HTMLDivElement){
    div.style.display="none"
  }

  filter(card : HTMLImageElement){
    card.style.filter="blur(3px) brightness(30%)"
  }

  unfilter(card : HTMLImageElement){
    card.style.filter="blur(0) brightness(100%)"
  }
}
