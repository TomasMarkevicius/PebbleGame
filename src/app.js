// /**
//  * Welcome to Pebble.js!
//  *
//  * This is where you write your app.
//  */

var UI = require('ui');
var Vector2 = require('vector2');
var Vector3 = require('vector2');
var Vector4 = require('vector2');

var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

main.show();

main.on('click', 'down', function(e) {
  var upAndDown = true;
  var xcoordinate = 0;
  var ycoordinate = 0;
var textfield = new UI.Text({
    position: new Vector2(xcoordinate, ycoordinate),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'O',

  });
  
  var randomX = Math.floor((Math.random() * 10) + 1)*10;
  var randomY = Math.floor((Math.random() * 10) + 1)*10;
//   var fcoordX = randomX;
//   var fcoordY = randomY;
var food = new UI.Text({
    position: new Vector3(randomX,randomY),
    size: new Vector3(144, 30),
    font: 'gothic-24-bold',
    text: '·',
});
  var score = 0;
var scoreText = new UI.Text({
    position: new Vector4(70,120),
    size: new Vector4(144, 20),
    font: 'gothic-24-bold',
  text: 'Score: '+score,
});

  var card = new UI.Window();
  card.add(scoreText);
  card.add(textfield);
  card.add(food);
  card.show();
  card.on('click','select',function(e){
    if (upAndDown === true){
      upAndDown = false;
    }
    else{
      upAndDown = true;
    }
  });
  card.on('click','up',function(e){
    
    console.log('"YOU PRESSED UP"');
    card.remove(textfield);
    if (upAndDown === true){
      ycoordinate -=10;
    }
    else{
      xcoordinate -= 10;
    }
    textfield = new UI.Text({
    position: new Vector2(xcoordinate, ycoordinate),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'O',
  });
    card.add(textfield);
    if ((randomX===xcoordinate)&&(randomY===ycoordinate)){
      score+=10;
      card.remove(scoreText);
      card.remove(food);
      scoreText = new UI.Text({
        position: new Vector4(70,120),
        size: new Vector4(144, 20),
        font: 'gothic-24-bold',
        text: 'Score: '+score,
    });
      randomX = Math.floor((Math.random() * 10) + 1)*10;
      randomY = Math.floor((Math.random() * 10) + 1)*10;
      food = new UI.Text({
    position: new Vector3(randomX,randomY),
    size: new Vector3(144, 30),
    font: 'gothic-24-bold',
    text: '·',
});
      card.add(scoreText);
      card.add(food);
    }
    
    console.log(' '+randomX+' '+randomY+' '+xcoordinate+' '+ycoordinate);
  });
  card.on('click','down',function(e){
    console.log('"YOU PRESSED DOWN"');
    
    card.remove(textfield);
    if (upAndDown === true){
      ycoordinate +=10;
    }
    else{
      xcoordinate += 10;
    }
    textfield = new UI.Text({
    position: new Vector2(xcoordinate, ycoordinate),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'O',

  });
    card.add(textfield);
    if ((randomX===xcoordinate)&&(randomY===ycoordinate)){
      score+=10;
      card.remove(scoreText);
      card.remove(food);
      scoreText = new UI.Text({
        position: new Vector4(70,120),
        size: new Vector4(144, 20),
        font: 'gothic-24-bold',
        text: 'Score: '+score,
    });
      randomX = Math.floor((Math.random() * 10) + 1)*10;
      randomY = Math.floor((Math.random() * 10) + 1)*10;
      food = new UI.Text({
    position: new Vector3(randomX,randomY),
    size: new Vector3(144, 30),
    font: 'gothic-24-bold',
    text: '·',
});
      card.add(scoreText);
      card.add(food);
    }
    
    console.log(' '+randomX+' '+randomY+' '+xcoordinate+' '+ycoordinate);
  });
  
});

