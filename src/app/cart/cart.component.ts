import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartCompononent {
  constructor(private route: Router){}

  quantity: any = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4},
    {value: 5, viewValue: 5},
  ];
  
  change(){
    console.log("hello")
    this.route.navigateByUrl("/detail")
  }
}