import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe I', 'This is simply a test', 'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg'),
    new Recipe('A Test Recipe II', 'This is simply a test', 'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg'),
    new Recipe('A Test Recipe III', 'This is simply a test', 'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
