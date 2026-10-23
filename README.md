# Tic-Tac-Toe — Angular

A two-player Tic-Tac-Toe game built with Angular. Players take turns placing X and O on a 3 × 3 board, and the game checks for a winner or a draw.

## Features

- Start a new game and reset the board.
- Alternate turns between X and O.
- Detect horizontal, vertical, and diagonal wins.
- Detect a draw when all nine squares are filled without a winner.
- Separate game logic from the board and square presentation components.

## Technology stack

- Angular 14
- TypeScript
- Angular CLI
- Jasmine and Karma test tooling

## Run locally

Prerequisites: Node.js and npm compatible with Angular CLI 14.

~~~bash
npm ci
npm start
~~~

Open `http://localhost:4200/`.

## Build and test

~~~bash
npm run build
npm test
~~~

## Project structure

~~~text
src/app/
├── board/                # Board and square presentation
├── game/                 # Turns, moves, winner and draw logic
└── app.component.*       # Application shell
~~~

## Next improvements

- Prevent moves after the game has ended.
- Add accessible labels and keyboard navigation.
- Add unit tests for all win patterns, invalid moves, and draw detection.
- Consider upgrading the Angular toolchain as part of ongoing maintenance.

## License

No license file is currently included. Add an explicit license before inviting others to reuse or redistribute this project.
