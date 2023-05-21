import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe; 
  @Output() selected = new EventEmitter<Recipe>();

  onSelected() {
    this.selected.next(this.recipe);
  }
}
