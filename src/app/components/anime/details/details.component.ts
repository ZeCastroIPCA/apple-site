import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private getAnime: AnimeService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
        data => {this.getAnime.getInfoId(data.id).subscribe(x =>{ this.result = x; console.log(x)});
    });

  }
  openPopUp(div : HTMLDivElement, arrow : HTMLDivElement) {
    div.style.transform="translateX(-50%)"
    setTimeout(()=>{
      arrow.style.animation="swing-out-right-bck 0.45s cubic-bezier(0.600, -0.280, 0.735, 0.045) both"
      setTimeout(()=>{
        arrow.style.display="none"
      }, 450);
    }, 1000);
  }

  closePopUp(div : HTMLDivElement, arrow : HTMLDivElement) {
    // div.style.transform="translateX(50%)" //to all media queries
    div.style.transform="translateX(68%)"
    setTimeout(()=>{
      arrow.style.display="grid"
      arrow.style.animation="swing-in-right-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both"
    }, 1000);
  }

  result : any = {
    title: "",
    synopsis: "",
    image_url:"",
    episodes: "",
    score: ""
  }

}
