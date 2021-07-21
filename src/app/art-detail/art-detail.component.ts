import { Component } from '@angular/core';

@Component({
  selector: "app-art-detail",
  templateUrl: "./art-detail.component.html"
})
export class ArtDetailCompononent {
  quantity: any = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4},
    {value: 5, viewValue: 5},
  ];
}