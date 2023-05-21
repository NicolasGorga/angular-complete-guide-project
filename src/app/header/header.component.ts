import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() selectedRecipe = new EventEmitter<void>();
  @Output() selectedShopping = new EventEmitter<void>();

  collapsed = true;
}
