import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipies: Recipe[] = [
    new Recipe('test', 
    'a test recipe',
    'https://www.fannetasticfood.com/wp-content/uploads/2019/11/savory-sweet-potato-casserole-5-406x406.jpg',  
    ),
    new Recipe('test', 
    'a test recipe',
    'https://www.fannetasticfood.com/wp-content/uploads/2019/11/savory-sweet-potato-casserole-5-406x406.jpg',  
    ),
  ];

}
