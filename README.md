
# Introduction
This game implements a __simplified__ version of the Frogger game.  
Please see the game instructions on how to play the game.

## Instructions
The game can be started by loading index.html located in the game root 
directory into your browser of choice.

The game will start with a screen like this:
![Start screen](/images/start.png)

Use the left and right arrow keys to move the highlight to the desired 
character.  Then press '<Enter>' to select the highlighted character.

Actual gameplay can now begin.

The arrows keys are used to move the character passed the enemies to the 
safety area at the top of the field.  When the character reaches the safety
area, there is a win, and the game will restart.  

## Testing
Functionality was fully tested on **Google Chrome V51.0.2704.103 m**.  
Basic functionality was also tested on **Mozilla Firefox 4.0**
with no success, but it does work on **Mozilla Firefox 43.0.103**.  
Basic functionality was tested on **Internet Explorer 11.0.9600.17728CO**

A third agrument had to be added to `AddEventListener` for Firefox to work
properly.

The following line had to be added to `index.hmtl` to have Internet Explorer
work properly:
`
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" >
`

## Licensing
Licensing per Udacity frontend-nanodegree-arcade-game