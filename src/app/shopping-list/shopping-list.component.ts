import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Eggs', 1)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: {name: string, amount: number}) {
    this.ingredients.push(ingredient)
  }

}
