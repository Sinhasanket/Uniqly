import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartCompononent {
  constructor(private route: Router){}
  
  change(){
    console.log("hello")
    this.route.navigateByUrl("/detail")
  }
}