import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  background = ""

  changeColor() {
    this.background = this.background == 'red' ? 'white' : 'red'
  }

  changeButtonColor(ref : { src: string; }, button : HTMLButtonElement){
        ref.src = 'assets/images/iphone-' + button.className + '.png'
  }
}
