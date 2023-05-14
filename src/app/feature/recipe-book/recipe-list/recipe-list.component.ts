import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
      {
        name: 'Shakshuka',
        description: 'A delicious dish with an extravagant name',
        imagePath: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      },
      {
        name: 'Lasagna',
        description: 'An italian classic full of flavours',
        imagePath: 'https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg',
      },
      {
        name: 'Tacos',
        description: 'A mexican classic, beware of the spice',
        imagePath: 'https://www.seriouseats.com/thmb/4kbwN13BlZnZ3EywrtG2AzCKuYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg',
      },
    ];
}
