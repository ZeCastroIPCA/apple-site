import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-s-color',
  templateUrl: './s-color.component.html',
  styleUrls: ['./s-color.component.css']
})
export class SColorComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute) { }

  color : string = ""

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      params => this.color = params.color
    )
  }
}
