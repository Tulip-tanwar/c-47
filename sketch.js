
var teacher;
var student1,student2,student3,student4,student5;
var school;
var form,game,player;
var schoolImage;
var hallImage;
var classRoomImage;
var classRoom,hall,option
var gameState=0;
var bg1;
var playerCount;
var database;

function preload(){
schoolImage=loadImage("school.png");
hallImage=loadImage("hall.jpg");
classRoomImage=loadImage("ClassRoom.jpg");

	
}

function setup() {
	createCanvas(1200, 700);
	background("lightblue");
	bg1=createSprite(600,350,1000,1000);
	bg1.addImage("bg1",schoolImage);
	bg1.scale=1.5;
	database=firebase.database();


	
	

	//Create the Bodies Here.
game=new Game();
game.getState();
game.start();

classRoom=createSprite(700,350,20,20);
	hall=createSprite(200,350,20,20);  
}



function draw() {
 
   if(playerCount===1){
	   game.update(1);
	   
   }
   if (gameState===1){
	   game.play();
   }
if(gameState===2){
	game.end();
}
  
  drawSprites();
 
}



