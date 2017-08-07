import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService {


  private recipes: Recipe[] = [
    {
      name: 'test',
      description: 'simple description',
      imagePath: 'https://supervalu.ie/image/var/files/real-food/recipes/operation-transformation-recipes/fish-cakes-recipe.jpg'
    },
    {
      name: 'Mercola Recipes',
      description: 'In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready',
      imagePath: 'http://media.mercola.com/assets/images/recipes/baked-avocado-recipe.jpg'
    },
    {
      name: 'test',
      description: 'In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready',
      imagePath: 'https://supervalu.ie/image/var/files/real-food/recipes/operation-transformation-recipes/fish-cakes-recipe.jpg'
    },
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }

}
