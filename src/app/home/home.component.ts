import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeCompononent {
  constructor(private route: Router){}
  
  change(){
    console.log("hello")
    this.route.navigateByUrl("/detail")
  }
}