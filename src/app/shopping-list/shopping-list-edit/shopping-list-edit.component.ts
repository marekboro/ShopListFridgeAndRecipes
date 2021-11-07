import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputReference!: ElementRef;
  @ViewChild('amountInput') amountInputReference!: ElementRef;

  selectedIngredient: Ingredient = new Ingredient("",0);


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.ingredientSelected.subscribe((ingredient:Ingredient) => {
      this.selectedIngredient = ingredient;
      
    })

  }

  onSubmitAdd() {
    const newName = this.nameInputReference.nativeElement.value;
    const newAmount = this.amountInputReference.nativeElement.value;
    const newIngredient = new Ingredient(newName, newAmount)
    this.shoppingListService.addOneToShoppingList(newIngredient);
  }

  clearShoppingList(){
    this.shoppingListService.clearShoppingList();
  }

  updateIngredientInShoppingList(){
    const newName = this.nameInputReference.nativeElement.value;
    const newAmount = this.amountInputReference.nativeElement.value;
    const updatedIngredient = new Ingredient(newName, newAmount)
    this.shoppingListService.updateIngredient(updatedIngredient)
    this.selectedIngredient = new Ingredient("",0);

  }

  removeSelected(){
    this.shoppingListService.removeIngredient()
  }



}
