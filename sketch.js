const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);
}

async function getBackgroundImg(){

    var response = await (await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")).json();

    //console.log(response);
    //change the data in JSON format
    dateTime=response.datetime;
    //console.log (dateTime);
    // write code slice the datetime
    var hour=dateTime.slice(11,13);
    console.log (hour);
    // add conditions to change the background images from sunrise to sunset
    if (hour ===7 || hour === 8){
        bg="sunrise2.png"
    }
    else if(hour===6){
        bg="sunrise1.png"
    }
    else if(hour===9){
        bg="sunrise3.png"
    }
    else if(hour===10){
        bg="sunrise4.png"
    }
    else if(hour===19){
        bg="sunset7.png"
    }
    else if(hour===20){
        bg="sunset8.png"
    }
    else if(hour===21){
        bg="sunset10.png"
    }
    else if(hour>21){
         bg="sunset11.png"
    }
    else if (hour<6){
        bg="sunset12.png"
    }
    else{
        bg="sunrise5.png"
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
