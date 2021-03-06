import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    {
      name: 'Apple',
      amount: 20,
    },
    {
      name: 'Totmatos',
      amount: 220,
    },
  ];

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();  // .slice() --> get copy of values
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
