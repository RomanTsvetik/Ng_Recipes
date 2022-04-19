import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';

import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer'
import * as RecipeAction from '../store/recipe.actions';
import * as ShopphingListAction from '../../shopping-list/store/shopping-list.actions';


@Component({
    selector: 'app-recipes-details',
    templateUrl: './recipes-details.component.html',
    styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

    recipe: Recipe;
    id: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<fromApp.AppState>
    ) { }

    ngOnInit() {
        this.route.params
            .pipe(
                map(params => {
                    return +params['id'];
                }),
                switchMap(id => {
                    this.id = id;
                    return this.store.select('recipes');
                }),
                map(recipesState => {
                    return recipesState.recipes.find((recipe, index) => {
                        return index === this.id
                    });
                })
            )
            .subscribe(recipe => {
                this.recipe = recipe;
            })
    }


    onAddToShippoingList() {
        this.store.dispatch(new ShopphingListAction.AddIngredients(this.recipe.ingredients))
    }

    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route })
    }

    onDeleteRecipe() {
        // this.recipeService.deleteRecipe(this.id);
        this.store.dispatch(new RecipeAction.DeleteRecipe(this.id))
        this.router.navigate(['/recipes'])
    }
}
