import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe!:Recipe;
  id!:number;

  constructor(private recipeService:RecipeService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getOneRecipe(this.id)
      }
    );


    // this.recipe = this.recipeService.getOneRecipe(parseInt(this.route.snapshot.url.toString()))
  }

  addRecipeIngredientsToShopptingList(){
    this.recipeService.addRecipeIngredientsToShoppingList(this.recipe)
    console.log("Recipe added to shopping list", this.recipe)
  }

  editRecipe(){
    this.router.navigate([`edit`],{relativeTo:this.route})
    // this.router.navigate([`../${this.id}/edit`],{relativeTo:this.route})
  }



}
