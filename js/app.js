
function getRandomSpeed() {
    return Math.floor(Math.random() * (200 - 50 + 1)) + 50;
}

function getRandomRow(){
  var randomRow = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (randomRow === 1){
      return 60;
    } else if (randomRow === 2) {
      return 140;
      } else {
      return 220;
      }
    }


// Enemies our player must avoid
var Enemy = function(x1) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x1;
    this.y = getRandomRow();
    this.s = getRandomSpeed();

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

  this.x += this.s * dt;
  if (this.x >= 550 ){
    this.x = 0;
    this.s = getRandomSpeed();
    this.y = getRandomRow();
  }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){


  this.sprite = 'images/char-boy.png';
  this.x = 0;
  this.y = 54;
}

Player.prototype.update = function(dt){

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction){

}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(0,60), new Enemy(0,140), new Enemy(0,220)];

// Place the player object in a variable called player
var player = new Player();



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
});
