import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  squares: any = [];
  xIsNext: boolean = true;
  Winner = '';
  Counter = 0;
  isDraw = '';
  freshpage = true;


  constructor() { }

  ngOnInit(): void {
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.Winner = '';
    this.isDraw = '';
    this.Counter = 0;
    this.freshpage = false;
  }

  get Player() {
    return this.xIsNext ? 'X' : 'O';
  }

  Makemove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.Player);

      this.xIsNext=!this.xIsNext;
     //this.xIsNext = false;
      this.Counter++;
      this.Winner = this.CalculateWinner();

      if (!this.Winner && this.Counter==9) {
        this.isDraw='yes'

      }

    }
  }

  CalculateWinner() {
    /*
    0 1 2
    3 4 5
    6 7 8
    */

    const Lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < Lines.length; i++) {
      const [a, b, c] = Lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }

    }
    return null;

  }

}
