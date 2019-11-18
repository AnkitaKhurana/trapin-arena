import * as PIXI from "pixi.js";

let Score_Label_CSS  = {
    fontFamily : 'Arial',
     fontSize: 24, 
     fill : 0xffffff, 
    align : 'center'};

let GameScore = 0 ;  
let scoreBoardTextValue = new PIXI.Text(GameScore,Score_Label_CSS);

export let updateGameScore =( num )=>{
    GameScore+=num;
    scoreBoardTextValue.text = GameScore;
}

let addScoreBoard = (parentContainer) => {
  
    let scoreBoardContainer = new PIXI.Container();
    
    let scoreBoardTextlabel = new PIXI.Text('SCORE',Score_Label_CSS);
    scoreBoardTextlabel.position.x = 800;
    scoreBoardTextValue.position.x = 900;
    scoreBoardContainer.addChild(scoreBoardTextlabel);
    scoreBoardContainer.addChild(scoreBoardTextValue);
    parentContainer.addChild(scoreBoardContainer);
}

export let scoreSetup = (parentContainer) => {
   addScoreBoard(parentContainer);
};


