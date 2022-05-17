//Declaramos la variable del mariachi junto con su variable para precargar su imagen
var mariachi,mariachiImg;
//Declaramos la variable del esqueleto junto con su variable para precargar su imagen
var skeleton,skeletonImg,skeletonGroup;
//Declaromos la variable del piso
var gameState = "serve" ;
var floor,floorImg;
var piso;
var base1,base2,base3,base4,base5,base7,base8,base9,base10;
var bg;




//Creamos la funcion precargar
function preload(){
  //Precargamos la Img del mariachi
  mariachiImg = loadAnimation("Mariachi.png","Run.png","run_back.png");
  //Precargamos la Img del esqueleto
  skeletonImg = loadAnimation("esqueleto.png","Move.png","Run2.png");
//precargamos el fondo
  bg = loadImage("Fondo.jpg")

  floorImg = loadImage("Piso.png")

}
  
//creamos la funcion setup
function setup() {
 
  //CReamos el canvas del juego
  createCanvas(800,400);
 
  
  //Creamos un sprite para el mariachi
  mariachi = createSprite(30, 395, 50, 50);
  mariachi.addAnimation("mariachi", mariachiImg)
  mariachi.scale = 0.05
  //creamos sprite para el esqueleto
  /*skeleton = createSprite(750,385,50,50)
  skeleton.addAnimation("esqueleto", skeletonImg)
  skeleton.scale = 0.3*/
  //creamos el piso como sprite
  floor = createSprite(width/2,height,width,1)
  floor.visible = false
  //floor.addImage("piso", floorImg)
  
  base1= new Piso(50,390)
  base2= new Piso(740,390)
  base3= new Piso(740,90)
  base4= new Piso(50,90)
  base5= new Piso(400,250)
  base6= new Piso(260,300)
  base7= new Piso(140,350)
  base8= new Piso(520,300)
  base9= new Piso(590,350)
  //base10= new Piso(400,200)

  skeletonGroup = new Group()


}


//Creamos la funcion dibujar
function draw() {
  //Establecemos el fondo del juego
  background(0); 
  image(bg,0,0,width,height);

  //Dibujamos los sprites
  drawSprites()
  mariachi.collide(floor)
  skeletonGroup.collide(floor)

 

  
  base1.display();
  base2.display();
  base3.display();
  base4.display();
  base5.display();
  base6.display();
  base7.display();
  base8.display();
  base9.display();





  //Movimiento del mariachi
  if(keyDown("left_arrow")){
    mariachi.x = mariachi.x - 3;
  }

  if(keyDown("right_arrow")){
    mariachi.x = mariachi.x + 3;
    mariachi.changeImage()
  }

  if(keyDown("space")){
    mariachi.velocityY = -5;

  }

  //Graavedad del mariachi
  mariachi.velocityY += 0.8;


  skeletonSpawn()

  
}

function skeletonSpawn(){
 if(frameCount % 40 == 0 ){

  skeleton = createSprite(80,120,50,50)
  skeleton.y = Math.round(random(80,390));
  skeleton.x = Math.round(random(80,790));
    skeleton.addAnimation("esqueleto",skeletonImg);
    skeleton.scale = 0.3;
    skeleton.velocityX = -0.4;
    skeleton.velocityY = +0.8;
    skeleton.lifetime(200)
    skeletonGroup.add(skeleton)

 }


}