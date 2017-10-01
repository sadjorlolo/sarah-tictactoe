[![Sarah's Tic Tac Toe Logo](https://i.imgur.com/COINrGQ.png)](https://sadjorlolo.github.io/sarah-tictactoe/)

# Sarah's Tic Tac Toe Game

[Sarah's Tic Tac Toe Game](https://sadjorlolo.github.io/sarah-tictactoe/) is a
custom SPA game engine, written by me, Sarah Adjorlolo. The repository is pinned
to my personal [Github](https://github.com/sadjorlolo/sarah-tictactoe) page.

## About the Game

With this application, the user is able to sign up for an account, log in to
said account, and create a new tic-tac-toe game to play.

The signed-in user is always Player X, and upon clicking on a box, the player's
value appears, updates the game information on the API, and switches the player
to Player O. The user can only click on an empty box. If a clicked box already
has a value, the gameboard will not update the value, the game API will not
update, and the current player will not toggle. Instead, the user will receive
a message to pick another box. If there is a winner at the end of the game, the
application posts a message, declaring the specific victor, and blocks the
players from continuing the game. If no one wins, the game is a draw and
displays an appropriate message. At any point, whether or not a game is
completed, the user can create a new game and start from scratch.

Upon every user action, a message will display, indicating if the action was a
success or if there was an error.

User capabilities also include the ability to change a password, receive game
statistics in the form of total games played, and sign out.

## Development Process

In the beginning, I started out by making sure I could get the tic-tac-toe game
itself to work. The toughest part was finding an uncomplicated way to match the
values pushed to the correct index of the game array to a list of all possible
winner scenarios. Using array iteration methods was my first attempt, and while
that could be successful if there were a multitude of scenarios, it wasn't
practical for the amount of time I was spending on it. Instead I hard-coded
win scenarios in an if statement to loop through the array and find a winner.

Next, I worked on the authorization component of sign up, sign in, change
password, and sign out. This was straightforward and I had no issues.

The process for creating a game and getting the game statistics was not too
difficult. The hard part for me came with updating the game. I could not figure
out how to match and push the data from the game array into the API cells array.
Passing data to the API as we did with the input fields would not work. Finally,
I managed to set the index and value components to variables, which I could set
to a data object, which would then be passed as a parameter to the updateAPI

My biggest hurdle was an issue occurring when a user signed out or created a new
game in the middle of the current game. Upon return, once an empty box was
clicked, the correct value would populate the box, but the user would receive
an error message that the selected box was already populated (which it clearly
wasn't).

I made sure everything was spelled correctly and calling the proper functions.
No dice. I checked the data passed when a new game was created to see if old
values were still coming through. No dice. I forced the gameboard array and box
values to be empty strings upon game creation. No dice. I ran console.logs at
every single point in the game play process to see the order events were firing.

Finally, I saw that my function for setting gameboard array values and checking
the box for populated values was running twice. The first time it worked as
expected and populated the box and API game array. The second time through, it
fired the error message against the box just clicked, because it now had a
value. This problem was created by having two different functions load the
on-click event handler, thus running it two separate times for the same event.
By turning off the click handler and turning it back on within a single
function, the problem was solved.

## Technologies Used

The following technologies were used in the creation of this game:
-  HTML for the basic game layout
-  SCSS for the custom formatting and display of the game, including Bootstrap
   for a more responsive interface.
-  AJAX requests are used for interacting with the API in the form of:
    - POST requests to sign up with a new account, sign in to the application,
      and create a new game;
    - PATCH requests to update the API game array and update user passwords;
    - GET request to retrieve user statistics;
    - including Authorization headers to specify POSTs, PATCHs, and GETs for
      the particular signed-in user only.
-  jQuery for DOM manipulation and event handling functionality.

## Unsolved Problems

1. Update responsiveness of gameboard height for smaller screens. Currently,
  the width changes with bootstrap, but height stays static.
2. Update `updateGameSuccess` message to reveal whose turn it is.

## Wireframes & User Stories

![Tic Tac Toe Wireframe](https://i.imgur.com/F8BSAez.png "Sarah's tictactoe wireframe")

User Stories :
1. As a user, I want to be able to sign up for an account.
2. As a user, I want to be able to sign in to my account.
3. As a user, I want to be able to change my password.
4. As a user, I want to be able to sign out of my account.
5. As a user, I want to be able to access my game stats.
6. As a user, I want to be able to visually see my actions in the tic-tac-toe
   game.
