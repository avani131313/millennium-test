var waterCollected 
var bg, button, millennium, ini,innovation
var bgImg, buttonImg, millenniumImg, iniImg,innovationImg



function preload(){
bgImg = loadImage("assets/bg.png")
buttonImg = loadImage("assets/button.png")
iniImg = loadImage("assets/ini.png")
millenniumImg = loadImage("assets/Millennium.png")
innovationImg = loadImage("assets/innovation.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  database = firebase.database();
  box = createSprite(width / 2, height / 2, 200, 200);
  box.addImage(buttonImg)
  box.scale = 0.5
  box.shapeColor = "black"
  

  var schoolRef = database.ref("school1/");
  schoolRef.on("value", readWater);
}

function draw() {
  background(bgImg);
  if(waterCollected){
    
  
  textSize(50)
  text(waterCollected,width/2,height/2-200)
  image(millenniumImg,width/2-70,200,width/4,height/6)

  if(mousePressedOver(box)){
       
      writeWater(waterCollected+1)
    }
  
  if (touches.length > 0) {
    
    
    
    if (touches[0].x > box.x - box.width/2 && touches[0].x < box.x + box.width/2 && touches[0].y > box.y - box.height/2 && touches[0].y < box.y + box.height/2) {
      
      writeWater(waterCollected+1)
    }

    touches = []
  }

  drawSprites();
}
}

function writeWater(water) {
  database.ref('/').set({
    'school1': water,
  })
}

function readWater(data) {
  waterCollected = data.val();
  

}
