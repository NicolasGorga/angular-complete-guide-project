import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayFeature: 'recipe' | 'shopping' = 'recipe';

  onRecipeSelected() {
    this.displayFeature = 'recipe';
  }

  onShoppingSelected() {
    this.displayFeature = 'shopping';
  }
}
