# Simon Game

This is a simple Simon Game created using HTML, CSS, and JavaScript. The goal of the game is to remember and replicate an increasing sequence of colors displayed by the game.

## Table of Contents

- [Gameplay](#gameplay)
- [Features](#features)
- [Files](#files)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Gameplay

1. **Starting the Game**: Press any key to start the game. This will initiate the first round by flashing a random color.
2. **Repeating the Sequence**: Click on the colored boxes in the same sequence that was shown. Each successful round adds a new color to the sequence.
3. **Game Over**: If you click the wrong color, the game will reset, and a "Game Over" message will appear. Press any key to restart.

The game increases in difficulty as the sequence gets longer, challenging your memory.

## Features

- **Responsive Design**: The game is playable on different screen sizes.
- **Flash Animation**: When a color is selected, it flashes briefly.
- **Progressive Difficulty**: The color sequence grows longer with each round.

## Files

- **index.html**: Contains the structure of the game, including a container for the color buttons and headers for displaying instructions and the current level.
- **style.css**: Styles the game layout, including color and button design, flash animation, and layout alignment.
- **app.js**: Implements the game logic, including sequence generation, input handling, and game-over conditions.

## Installation

1. Clone the repository:

   git clone https://github.com/yourusername/simon-game.git
   cd simon-game

2. Open `index.html` in your browser to start playing.

## Usage

1. **Starting**: Press any key to begin the game.
2. **Playing**: Follow the sequence by clicking on the correct colors in the correct order.
3. **Restarting**: After a game-over, press any key to restart.

## Technologies Used

- **HTML**: For structuring the webpage.
- **CSS**: For styling the game elements.
- **JavaScript**: For game logic and sequence handling.

Enjoy playing the **Simon Game**!
