import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Pancake', 'This is a very tasty meal', 'https://upload.wikimedia.org/wikipedia/commons/6/62/%D0%9E%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D1%96.jpg'),
    new Recipe('Noncake', 'This is another meal', 'https://upload.wikimedia.org/wikipedia/commons/6/62/%D0%9E%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D1%96.jpg')
  ]
 
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

}
