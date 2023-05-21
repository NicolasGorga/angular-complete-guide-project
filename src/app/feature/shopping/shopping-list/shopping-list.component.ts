import { Component } from '@angular/core';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
      {
        name: 'Apples',
        amount: 5
      },
      {
        name: 'Oranges',
        amount: 8
      },
    ];

    onNewIngredient(ingredient: Ingredient) : void {
      this.ingredients.push(ingredient);
    }
}
