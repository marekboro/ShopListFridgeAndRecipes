import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {
  fridgeFoodItems: Ingredient[] =[];
  
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.fridgeFoodItems = this.shoppingListService.getFridgeItems();
  }

}
