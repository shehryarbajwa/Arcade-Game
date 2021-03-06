// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //X and y position
    this.x = x;
    this.y = y + 50;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.xaxismove = 101;
    this.boundary = this.xaxismove * 5;
    this.resetPos = -this.xaxismove;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x < this.xaxismove * 4){
      this.x += this.speed * dt;
    } else {
      this.x = this.resetPos;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Hero = function(x,y){
  this.x = 0;
  this.y = 0;

  this.xaxismove = 101;
  this.yaxismove = 83;
  this.xaxisstart = 2 * this.xaxismove;
  this.yaxisstart = (4 * this.yaxismove) + 50;

  this.x = this.xaxisstart;
  this.y = this.yaxisstart;
  this.victory = false;


  this.sprite = 'images/char-boy.png';
};

Hero.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var player = new Hero(0,0);
var enemy = new Enemy(-100,30,150);
var enemy2 = new Enemy(-101,83,150);
var enemy3 = new Enemy((-100*2.5),83,150);
const allEnemies = [];
allEnemies.push(enemy, enemy2, enemy3);



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
Hero.prototype.handleInput = function(input){
  switch (input) {
    case 'left':
          if(this.x > 0){
            this.x -= this.xaxismove;
          }
      break;
    case 'right':
          if(this.x < this.xaxismove * 4){
          this.x += this.xaxismove;
        }
      break;
    case 'up':
          if(this.y > 0){
            this.y -= this.yaxismove;
          }
      break;
    case 'down':
          if(this.y < this.yaxismove * 5){
            this.y += this.yaxismove;
          }
      break;
  }
};


Hero.prototype.reset = function(){
  this.x = this.xaxisstart;
  this.y = this.yaxisstart;
}

Hero.prototype.update = function(){

  for (let enemy of allEnemies){
    if(this.y === enemy.y && (enemy.x + enemy.xaxismove/2 > this.x && enemy.x < this.x + this.xaxismove/2)){
      this.reset();
    }
  }
  if(this.y === 50){
    this.victory = true;
  }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    player.update();
});
