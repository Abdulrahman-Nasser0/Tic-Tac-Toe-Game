const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {
  constructor() {
    this.playerTurn = "O"; // Start with player 'O'

    this.grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Add commands for cursor movement
    Screen.addCommand('w', 'Move Up', this.cursorUp.bind(this));
    Screen.addCommand('s', 'Move Down', this.cursorDown.bind(this));
    Screen.addCommand('a', 'Move Left', this.cursorLeft.bind(this));
    Screen.addCommand('d', 'Move Right', this.cursorRight.bind(this));
    Screen.addCommand('p', 'Place Move', this.placeMove.bind(this));

    Screen.render();
  }

  cursorUp() {
    this.cursor.resetBackgroundColor();
    this.cursor.up();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  cursorDown() {
    this.cursor.resetBackgroundColor();
    this.cursor.down();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  cursorLeft() {
    this.cursor.resetBackgroundColor();
    this.cursor.left();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  cursorRight() {
    this.cursor.resetBackgroundColor();
    this.cursor.right();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  placeMove() {
    const row = this.cursor.row;
    const col = this.cursor.col;

    // Check if the current position is empty
    if (this.grid[row][col] === " ") {
      // Place the player's move
      this.grid[row][col] = this.playerTurn;
      Screen.setGrid(row, col, this.playerTurn);

      // Check for a winner
      const winner = TTT.checkWin(this.grid);
      if (winner) {
        TTT.endGame(winner);
      } else {
        // Switch turns
        this.playerTurn = this.playerTurn === "O" ? "X" : "O";
        Screen.render();
      }
    }
  }

  static checkWin(grid) {
    let winner = null;

    // Check horizontal wins
    for (let i = 0; i < 3; i++) {
      if (grid[i][0] !== " " && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
        winner = grid[i][0];
        break;
      }
    }

    // Check vertical wins
    for (let i = 0; i < 3; i++) {
      if (grid[0][i] !== " " && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
        winner = grid[0][i];
        break;
      }
    }

    // Check diagonal wins
    if (grid[0][0] !== " " && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
      winner = grid[0][0];
    }
    if (grid[0][2] !== " " && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
      winner = grid[0][2];
    }

    if (winner) {
      return winner;
    }

    // Check for tie (no empty cells and no winner)
    let isTie = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j] === " ") {
          isTie = false; // Found an empty cell, not a tie
          break;
        }
      }
    }

    if (isTie) {
      return "T"; // Return 'T' for a tie
    }

    // If no winner and no tie, return false indicating the game is still ongoing
    return false;
  }

  static endGame(winner) {
    if (winner === "O" || winner === "X") {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === "T") {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = TTT;
