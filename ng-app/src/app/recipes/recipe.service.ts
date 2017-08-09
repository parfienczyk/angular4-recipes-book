import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    {
      name: 'ddd',
      description: 'simple description',
      imagePath: 'https://supervalu.ie/image/var/files/real-food/recipes/operation-transformation-recipes/fish-cakes-recipe.jpg',
      ingredients: [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 21),
      ],
    },
    {
      name: 'Mercola Recipes',
      description: 'In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready',
      imagePath: 'http://media.mercola.com/assets/images/recipes/baked-avocado-recipe.jpg',
      ingredients: [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 3),
      ],
    },
    {
      name: 'test',
      description: 'In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready',
      imagePath: 'https://supervalu.ie/image/var/files/real-food/recipes/operation-transformation-recipes/fish-cakes-recipe.jpg',
      ingredients: [],
    },
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
