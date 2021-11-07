import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { RecipeBookComponent } from './recipes/recipe-book/recipe-book.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { FridgeComponent } from './fridge/fridge.component';
import { FridgeFoodListComponent } from './fridge/fridge-food-list/fridge-food-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FridgeFoodListEditComponent } from './fridge/fridge-food-list/fridge-food-list-edit/fridge-food-list-edit.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { FormsModule } from '@angular/forms';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    FoodItemComponent,
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    FridgeComponent,
    FridgeFoodListComponent,
    HeaderComponent,
    RecipesComponent,
    FridgeFoodListEditComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
