# PINBALL WORLD!!!
![Screenshot of finished project](./images/finished-project.png "Finished project!")

You've decided to become a pinball wizard! Having made it through Phase 1 at Flatiron School, you've decided to create a web app for yourself that will save your high score for the machines at your local pinball bar (yes, they exist).
## Setup
json-server --watch db.json

## Challenge #1
Make a request to `http://localhost:3000/games` and add the names of all the games in the `#game-list` nav element. We want to see both the name **and** the manufacturer for each game, since some games have the same name from different manufacturers. The end result should be of the format `name (manufacturer)`. For example, `Ghostbusters (Stern)`.

We want each element to be an `h5` tag.



## Challenge #2
When the page loads, show the `image`, `name`, and `high_score` properties of the the **first** game in the array returned from your fetch. 

## Challenge #3
When the user clicks on one of the games in the list, display all the details of that game.

## Challenge #4 
The user should be able to enter a high score in the form on the right side and have it show that value for "high score".

*The value of the high score does not need to persist between refreshes, but should save state when switching between games.*

