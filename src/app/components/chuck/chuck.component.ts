import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/services/chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  constructor(private chuckService : ChuckService) {
  }

  ngOnInit(): void {
  }

  randomize(array : any){
    return array[Math.floor(Math.random() * array.length)]
  }

  joke: string = "Click the button bellow to get a joke!"

  api : any
  random(){
    this.chuckService.getRandom().subscribe(data => {
      this.api = data
      this.joke = this.api.value
    });
  }
  api2 : any = "Click the button bellow to get a joke!"
  search(search: string){
    this.chuckService.getSeach(search).subscribe(data => {
      this.api2 = data
      console.log(this.api2)
      if(this.api2.result.length == 0) {
        this.api2 = "We could not find a joke."
      } else{
        this.api2 = this.randomize(this.api2.result).value
      }
    });
  }

}
