import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Ingredient} from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  ingredients: Ingredient[] = [];
  private ingChangeSub! :Subscription; //ingredientsChangeSubscritopn
  
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
      this.ingredients=this.shoppingListService.getShoppingList();
      this.ingChangeSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      })
  }

  ngOnDestroy(){
    this.ingChangeSub.unsubscribe();
  }

  onPurchase(ingredient:Ingredient){
    this.shoppingListService.wasPurchased(ingredient)
  }
  // receiveIngredient(ingredient:Ingredient){
  //   this.shoppingListService.addToShoppingList(ingredient);
  //   this.ingredients=this.shoppingListService.getShoppingList();
  //   // this.ingredients.push(ingredient);
  // }

  onSelectIngredient(ingredient:Ingredient){
    this.shoppingListService.selectIngredient(ingredient);
  }

}
