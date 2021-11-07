
import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs';

export class ShoppingListService {

    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    // fridgeIngredientsChanges = new EventEmitter<Ingredient[]>();
    // ingredientSelected = new EventEmitter<Ingredient>();

    ingredientsChanged = new Subject<Ingredient[]>();
    fridgeIngredientsChanges = new EventEmitter<Ingredient[]>();
    ingredientSelected = new EventEmitter<Ingredient>();

    private selectedIngredient: Ingredient = new Ingredient("",0);

    private ingredients: Ingredient[] = [
        new Ingredient("chicken breast", 2),
        new Ingredient("red bell pepper", 1),
        new Ingredient("yello bell pepper", 1),
        new Ingredient("green bell pepper", 1),
        new Ingredient("onion", 2),
        new Ingredient("spices sachet", 1)
    ];

    private fridge: Ingredient[] = []

    getShoppingList() {
        return this.ingredients.slice();
    }
    getFridgeItems() {
        return this.fridge.slice();
    }

    addOneToShoppingList(ingredient: Ingredient) {
        let copyofIn
        let ingredientExists: boolean = false;
        if(ingredient.name.length>0){
            for (let ingr of this.ingredients) {
                if (ingr.name === ingredient.name) {
                    ingredientExists = true;
                    ingr.amount = Number(Number(ingr.amount) + Number(ingredient.amount));
                }
            }
            if (!ingredientExists) { this.ingredients.push(ingredient); }
            // this.ingredientsChanged.emit(this.ingredients.slice());
            this.ingredientsChanged.next(this.ingredients.slice());
        }
        
    }

    // addRecipeIngredientsToShoppingList(recipe:Recipe){
    //     recipe.ingredients.forEach((ingredient) => {
    //         this.addOneToShoppingList(ingredient)
    //     })
        
    // }

   

    removeFromShoppingList(ingredient: Ingredient) {
        let index: number = this.ingredients.indexOf(ingredient)
        this.ingredients.splice(index, 1);
        // console.log("huh? ")
    }

    wasPurchased(ingredient: Ingredient) {
        this.fridge.push(ingredient);
        this.fridgeIngredientsChanges.emit(this.fridge.slice());
        this.removeFromShoppingList(ingredient)
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());

    }

    clearShoppingList(){
        this.ingredients = [];
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    selectIngredient(ingredient: Ingredient){
        this.selectedIngredient=ingredient;
        this.ingredientSelected.emit(ingredient)
        console.log("selected ingredient: " + ingredient.name + " and amout: " + ingredient.amount)
    }

    updateIngredient(ingredient:Ingredient){
        console.log("ingredient tu update: " + ingredient.name + " a: " + ingredient.amount)
        let index = this.ingredients.indexOf(this.selectedIngredient)
        console.log("found item in shopping list at index: " + index)
        this.ingredients[index].name = ingredient.name;
        this.ingredients[index].amount = ingredient.amount;
        this.selectedIngredient = new Ingredient("",0);
        this.ingredientSelected.emit(ingredient)
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    removeIngredient(){
        let index = this.ingredients.indexOf(this.selectedIngredient)
        this.ingredients.splice(index,1)
        this.selectedIngredient = new Ingredient("",0);
        this.ingredientSelected.emit(this.selectedIngredient)
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());

    }
}