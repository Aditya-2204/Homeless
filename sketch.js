var characterStealer1, characterStealer2, moneyGiver1, moneyGiver2;
var Stealer1, Stealer2, Giver1, Giver2, Subwaybackground;
var Subway, City;
var characterHomeless;
var Homeless;
var Money
Money=0

var gameState

function preload(){
    characterStealer1 = loadImage("thief.png");
    characterStealer2=loadAnimation("Money takers 2.gif");
    moneyGiver1 = loadImage("Money givers 2.png");
    moneyGiver2 = loadAnimation("Money givers.png");
    characterHomeless = loadImage("Homelessguy.png");
    Subway = loadImage("Subway.jpeg");
    City = loadImage("city.jpeg");
}

function setup(){

    Stealer1=createSprite(34, 250);
    Stealer1.addImage("stealer",characterStealer1);

    Stealer2=createSprite(100, 200);
    Stealer2.addAnimation("stealer2",characterStealer2);

    Giver1 = createSprite(200, 300);
    Giver1.addImage("giver",moneyGiver1);

    Giver2 = createSprite(600, 300);
    Giver2.addAnimation("giver2", moneyGiver2);

    Homeless=createSprite(300, 200);
    Homeless.addImage("Homeless",characterHomeless);

    Subwaybackground=createSprite(400, 200);
    Subwaybackground.addImage("bg1", Subway);
    Subwaybackground.scale = 0.9
    



    Giver2.scale = 0.5;
    Giver2.depth = Subwaybackground.depth;
    Giver2.depth+=1

    Giver1.scale = 0.5;
    Giver1.depth = Subwaybackground.depth;
    Giver1.depth+=1

    Stealer2.scale = 0;
    Stealer2.depth = Subwaybackground.depth;
    Stealer2.depth+=1

    Stealer1.scale = 0;
    Stealer1.depth = Subwaybackground.depth;
    Stealer1.depth+=1

    Homeless.scale = 0.5;
    Homeless.depth = Subwaybackground.depth;
    Homeless.depth+=1
    Subway.scale = 0.5

    createCanvas(800, 400)
    
}

function draw(){
    if(keyDown(LEFT_ARROW)){
        Homeless.x-=20;
        Homeless.scale=0.3;
    }
    if(keyDown(RIGHT_ARROW)){
        Homeless.x+=20;
        Homeless.scale=0.3;
    }
    
    if (frameCount%10 == 0){
        Homeless.scale -= 0.01
        Homeless.y-=1
        if (Homeless.scale < 0){
            Homeless.scale = 0.3;
            Homeless.y=200;
            Giver2.x=580;
            Subwaybackground.addImage("bg1",City);
            Homeless.y=320
            Homeless.x=400;
    }
}

if (Homeless.scale>0){
    Subwaybackground.addImage("bg2", City);
    gameState=1;
}
else{
    gameState=2;
    Subwaybackground.addImage("bg1", Subway);
    moneytransfer();
}

//if(gameState == 1){
    //moneytransfer();
//}
    if (Homeless.scale < 0){    }
    drawSprites();
    textSize(22)
    fill("Grey");
    text("Money:"+Money, 690,100);
}

function moneytransfer(){
    if((Homeless.isTouching(Giver1) || (Homeless.isTouching(Giver2)))){
        Money+=Math.round(random(1,10));
        Homeless.scale=0.3
        Homeless.x=205
        Homeless.y=320
        Homeless.velocityX=0;
        Homeless.velocityY=0;
    }
}