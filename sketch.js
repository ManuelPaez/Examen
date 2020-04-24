var player1;
var player2;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
 
  player1 = new Villano();
  player2= new Heroe();
}

function draw() {
  background(50,90,100);
  player1.mostrar();
  player2.mostrar();

  
  if(keyCode == 65){
    player1.izquierda();
  }
  if(keyCode == 68){
    player1.derecha();
  }
  if(keyCode == 87){
    player1.arriba();
  }
  if(keyCode == 83){
    player1.abajo();
  }
   if(keyCode == 74){
    player2.izquierda();
  }
   if(keyCode == 76){
    player2.derecha();
  }
  if(keyCode == 73){
    player2.arriba();
  }
  if(keyCode == 75){
    player2.abajo();
  }
}
