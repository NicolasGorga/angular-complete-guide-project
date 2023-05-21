import { Component, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  onAddIngredient() : void {
    if(this.name.nativeElement.value !== '' && this.amount.nativeElement.value > 0) {
      this.newIngredient.next({
        name: this.name.nativeElement.value,
        amount: this.amount.nativeElement.value,
      })
    } else {
      console.log('Some input is empty');
    }
  }
}
