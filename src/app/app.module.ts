import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './feature/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './feature/shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './feature/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './feature/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './feature/recipe-book/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './feature/recipe-book/recipe-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeBookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
