import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNewNumber(newNumber: number) {
    if(this._IsEvenNumber(newNumber)) {
      this.evenNumbers.push(newNumber);
    } else {
      this.oddNumbers.push(newNumber)
    }
  }

  private _IsEvenNumber(num: number) : boolean {
    return num % 2 === 0;
  }
}
