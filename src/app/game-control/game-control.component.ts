import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnDestroy {
  @Output() newNumber = new EventEmitter<number>();

  private _counterRef;
  private _currentNumber = 0;

  constructor() { }

  ngOnDestroy(): void {
    if(this._counterRef) {
      clearInterval(this._counterRef);
    }
  }

  onStartGame() {
    this._counterRef = setInterval(() => {
      this.newNumber.next(++this._currentNumber)
    }, 1000)
  }

  onStopGame() {
    clearInterval(this._counterRef);
  }

}
