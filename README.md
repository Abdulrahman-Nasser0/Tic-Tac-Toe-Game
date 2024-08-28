# Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Development](#development)
- [Screen API](#screen-api)
- [Contributing](#contributing)

## Features
- Command-line interface for a classic Tic-Tac-Toe game.
- Interactive cursor navigation to select grid cells.
- Alternating turns between X and O.
- Detection of game-ending conditions: win or tie.
- Easy-to-read, color-coded grid for better user experience.

## Installation
To get started, clone the repository and install the necessary dependencies:


```bash
git clone https://github.com/yourusername/tic-tac-toe.git
cd tic-tac-toe
npm install
```

## Usage
To run the game, use the following command:


```bash
node game.js
```
To run the tests:
```bash
Mocha
```

## Game Rules
- The game is played on a grid that is 3 squares by 3 squares.
- One player is X and the other player is O.
- Players take turns putting their marks in empty squares.
- The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
- If all 9 squares are filled and neither player has 3 in a row, the game is a draw.

## Development
### Tasks Completed
- Implemented cursor movement logic in cursor.js.
- Developed game logic in ttt.js.
- Set up Screen API commands to interact with the game board.
### Running the Tests
Ensure all tests pass by running:
```bash
mocha test/cursor-spec.js
mocha test/ttt-spec.js
```
## Screen API
The project uses a Screen API to handle command-line rendering. You can find detailed documentation on how to use the API within the codebase.

### Key Methods
- Screen.initialize(numRows, numCols) - Initializes the game grid.
- Screen.addCommand(key, description, action) - Adds keyboard commands.
- Screen.setGrid(row, col, char) - Sets a character on the grid.
- Screen.render() - Renders the current state of the game.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

For major changes, please open an issue first to discuss what you would like to change.
