
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    // recipeSelected = new EventEmitter<Recipe>();
    // recipeSelected = new Subject<Recipe>();  

    private recipes: Recipe[] = [
        new Recipe(
            "Fajitas",
            "Spicy mexican dish that will fill your stomach, satisfy your hunger and burn on the way out...",
            "https://reciperunner.com/wp-content/uploads/2015/04/SkilletChickenFajitas1.jpg",
            [
                new Ingredient("chicken breast", 2),
                new Ingredient("onion", 2),
                new Ingredient("red bell pepper", 1),
                new Ingredient("yellow bell pepper", 1),
                new Ingredient("green bell pepper", 1),
                new Ingredient("fajita spice bag", 1),
                new Ingredient("guacamole", 1),
                new Ingredient("sour cream", 1),
                new Ingredient("salsa", 1),
                new Ingredient("tortillas", 1)
            ]
        ),
        new Recipe(
            "Shredded chicken in sweet chili sauce",
            "Chinese food that that is as delicious as it will get you closer to a diabetic coma",
            "https://res.cloudinary.com/recipe-binder/image/fetch/e_vibrance:100,fl_force_strip/https://www.recipebinder.co.uk/images/recipe_images/imoyd.jpg",
            [
                new Ingredient("chicken breast", 2),
                new Ingredient("onion", 2),
                new Ingredient("red bell pepper", 1),
                new Ingredient("yellow bell pepper", 1),
                new Ingredient("green bell pepper", 1),
                new Ingredient("bean sprouts", 1),
                new Ingredient("egg noodles", 1),
                new Ingredient("dark soy sauce", 1),
                new Ingredient("chillies", 1),
                new Ingredient("sugar", 1)
            ]
        ),
        new Recipe(
            "TEST recipe 1",
            "Test description",
            "https://www.zegrahm.com/sites/zeg/files/styles/panopoly_image_original/public/pasta.jpg?t=1JeOaT&itok=eZRuyk0X",
            [
                new Ingredient("testItem 1", 4),
                new Ingredient("testItem 2", 3),
                new Ingredient("testItem 3", 2),
                new Ingredient("testItem 4", 1),
                new Ingredient("testItem 5", 5)
            ]
        )
    ];


    constructor(private shoppinListService: ShoppingListService) { }


    getRecipes() {
        return this.recipes.slice(); // will give us a COPY of our recipes
    }
    getOneRecipe(index: number): Recipe {
        return this.recipes.slice()[index]
    }

    addRecipeIngredientsToShoppingList(recipe: Recipe) {
        recipe.ingredients.map(ingredient => this.shoppinListService.addOneToShoppingList(ingredient))
        // recipe.ingredients.forEach(ingredient => this.shoppinListService.addOneToShoppingList(ingredient))

    }

    addRecipeToRecipeBook(recipe:Recipe){
        this.recipes.push(recipe);
    }

    modifyRecipe(recipe:Recipe,position:number){
        this.recipes[position] = recipe;    //overrides 
    }



}