import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipies: Recipe[] = [
    new Recipe('test', 'a test recipe, how was the taste !!', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.delish.com%2Fcooking%2Frecipe-ideas%2Frecipes%2Fa55760%2Fhealthy-chicken-casserole-recipe%2F&psig=AOvVaw2-sQqBEHh3A_pLaZn0EXKn&ust=1605598280652000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCf8vrFhu0CFQAAAAAdAAAAABAE')
  ];

}
