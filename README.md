# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

The game is initialized with a game board that displays 5 rows of images. The game play requires the player to cross the river

We start off the project with creating a Hero function with multiple properties that start with its x and y coordinates. We render this image to the board to select the hero on the screen. Then we initialize properties that the player will use to move sideways and vertically. Once we have these properties, we then create a function to handle the keyboard input of the user. The player's directions are controlled by the keyboard entries. 

Then we utilize the Enemy function and create properties for the enemies. The properties include the x and y coordinates, the location where they will appear from and the relative speed of the enemies in their attempt to stop the user from reaching the river

Once the river is reached successfuly without a collision with the enemies, a modal appears to congratulate the player and asks whether the user wants to attempt again or cancel.
