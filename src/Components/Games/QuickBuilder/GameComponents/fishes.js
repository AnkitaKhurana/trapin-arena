import * as PIXI from "pixi.js";
import {GameSpriteSheet} from "../../PixiUtilities/GameSpriteSheet.js";

let fishes = (parentContainer) => {
    let fishesContainer = new PIXI.Container();  
    for(var i = 0 ; i < 5 ; i++)
    {  
        let purpleFishSprite = GameSpriteSheet("purpleRightFacingFish",1992,981,4,3,0.25, 0.5);
        purpleFishSprite. x = 200*i;
        purpleFishSprite.y = 400;
        purpleFishSprite.play();
        fishesContainer.addChild(purpleFishSprite);
    }
    parentContainer.addChild(fishesContainer);
}
export let fishesSetup = (parentContainer) => {
   fishes(parentContainer);
};


