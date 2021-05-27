import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.readCookies()
  }

  closeCookies(footer:HTMLDivElement){
    footer.style.transition = '0.5s'
    footer.style.transform = 'translateY(15vh)'
    setTimeout( ()=>{
      footer.style.display = 'none'
    },500);
  }

  accepted : boolean = false
  dateNow : Date = new Date()

  acceptCookies(footer:HTMLDivElement){
    localStorage.setItem('cookies', '1')
    localStorage.setItem('date', this.dateNow.toDateString())
    localStorage.setItem('resolution', screen.width + "x" + screen.height)
    this.closeCookies(footer)
  }

  readCookies(){
    this.accepted = localStorage.getItem('cookies') == '1' ? true : false
  }
}
