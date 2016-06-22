 "use strict";
 
// Enemies our player must avoid
var Enemy = function(x, y, flip) 
{
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
	// Notice, enemies can go both directions
	this.flip = flip;
	if (this.flip == 'true')
	{
		this.sprite = 'images/enemy-bug-flipped.png';
		this.speedX = -(Math.floor((Math.random() * 4) + 1)) * columnWidth;
	}
	else
	{
		this.sprite = 'images/enemy-bug.png';
		this.speedX = (Math.floor((Math.random() * 4) + 1)) * columnWidth;
	}
	
	this.x = x;
	this.y = y;
	
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) 
{
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	var distance = this.speedX * dt;
	this.x += distance;
	if ( (this.x >= numColumns*columnWidth) && (this.flip == 'false') )
	{
		this.speedX = (Math.floor((Math.random() * 2) + 4)) * columnWidth;
		this.x = 0; 
	}
	else if ( (this.x <= 0) && (this.flip == 'true') )
	{
		this.speedX = -(Math.floor((Math.random() * 2) + 4)) * columnWidth;
		this.x = numColumns*columnWidth; 
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() 
{
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
var Player = function(x, y) 
{
    // Variables applied to each of our instances go here

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = '';
	this.prevX = 1;
	this.prevY = 1;
	this.x = x;
	this.y = y;
};

// Update the player's position, required method for game
Player.prototype.update = function() 
{
	//Check for reaching end of screen
	if (this.x > (numColumns-1)*columnWidth)
	{
		this.x = this.prevX;
	}
	else if (this.x < 0)
	{
		this.x = this.prevX;
	}
	else if (this.y > (numRows-1)*rowWidth)
	{
		this.y = this.prevY;
	}
	else if (this.y < 0)
	{
		this.y = this.prevY;
	}	
};

// Draw the player on the screen
Player.prototype.render = function() 
{
	if (this.sprite != "")
    {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
};

// Handle input by changing the value of player x or y 
// based on user input
Player.prototype.handleInput = function(keyCode)
{
	this.prevX = this.x;
	this.prevY = this.y;
	
	if (keyCode == "left")
	{
		this.x -= columnWidth;
	}
	else if (keyCode == "up")
	{
		this.y -= rowWidth;
	}
	if (keyCode == "right")
	{
		this.x += columnWidth;
	}
	if (keyCode == "down")
	{
		this.y += rowWidth;
	}
};

// Selection class
var Selection = function(x) 
{
    // Variables applied to each of our instances go here

    this.sprite = 'images/char-boy.png';
	this.selectionMade = 'false';
	this.x = x;

};

// Draw the selector on the screen
Selection.prototype.render = function() 
{
	ctx.drawImage(Resources.get('images/selector.png'), this.x, 3.5*columnWidth);
};

// Handle input by changing the value of player x or y 
// based on user input
Selection.prototype.handleInput = function(keyCode)
{
	if (keyCode == "left")
	{
		if (this.x >= columnWidth)
		{
			this.x -= columnWidth;
		}
	}
	else if (keyCode == "right")
	{
		if (this.x < 4*columnWidth)
		{
			this.x += columnWidth;
		}
	}
	else if (keyCode == "enter")
	{
		if (this.x == 0)
		{
			this.sprite = 'images/char-boy.png';
		}
		else if (this.x == 1*columnWidth)
		{
			this.sprite = 'images/char-cat-girl.png';
		}
		else if (this.x == 2*columnWidth)
		{
			this.sprite = 'images/char-horn-girl.png';
		}
		else if (this.x == 3*columnWidth)
		{
			this.sprite = 'images/char-pink-girl.png';
		}
		else if (this.x == 4*columnWidth)
		{
			this.sprite = 'images/char-princess-girl.png';
		}
		this.selectionMade = 'true';
	}
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// One enemy for each stone row
var allEnemies = [new Enemy(0, 2*(rowWidth)-columnWidth, 'false'), new Enemy(505, 3*(rowWidth)-columnWidth, 'true'), new Enemy(0, 4*(rowWidth)-columnWidth, 'false')];
// Place the player object in a variable called player
var player = new Player(2*columnWidth, 5*rowWidth);
var selection = new Selection(0);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) 
{
    var allowedKeys = 
	{
		13:	'enter',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

	if (selection.selectionMade != "true")
	{
		selection.handleInput(allowedKeys[e.keyCode]);
	}
	else
	{
		player.handleInput(allowedKeys[e.keyCode]);
	}
}, false);  //third argument added for Firefox...

