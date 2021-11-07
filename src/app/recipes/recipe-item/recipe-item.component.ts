import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: number;
  
  // @Output() recipeSelected= new EventEmitter<void>() ;

  constructor(private recipeService: RecipeService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelectedRecipe(){
    // this.recipeService.recipeSelected.emit(this.recipe);
    // this.router.navigate([`../${choice}`],{relativeTo:this.route})

  }



}
