import * as PIXI from "pixi.js";
import { GameSpriteSheet } from "../../PixiUtilities/GameSpriteSheet.js";
import { BezierCurveAnimation } from "../../PixiUtilities/GameAnimations.js";
import { updateGameScore } from "./score.js";
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
let getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

let burstFish = (event) => {
    event.currentTarget.visible = false;
    updateGameScore(2);
}

let fishes = (parentContainer, app) => {
    let fishesContainer = new PIXI.Container();
    for (let i = 0; i < 5; i++) {
        let points = [];
        let purpleFishSprite = GameSpriteSheet("purpleRightFacingFish", 1992, 981, 4, 3, 0.25, 0.25);
        purpleFishSprite.visible = false;
        purpleFishSprite.x = 500;
        purpleFishSprite.y = 400;
        purpleFishSprite.interactive = true;
        purpleFishSprite.click = burstFish;
        purpleFishSprite.touch = burstFish;
        purpleFishSprite.play();

        let randomNumber = getRandomArbitrary(100, 500);
        points.push(new PIXI.Point(500 + randomNumber * i, 500));
        points.push(new PIXI.Point(450 + randomNumber * i, 300));
        points.push(new PIXI.Point(250 + randomNumber * i, 300));
        points.push(new PIXI.Point(200 + randomNumber * i, 500));

        setTimeout(() => {
            purpleFishSprite.visible = true;
            BezierCurveAnimation(purpleFishSprite, points, app);
        }, i * 1000);
        fishesContainer.addChild(purpleFishSprite);

    }
    parentContainer.addChild(fishesContainer);

}
export let fishesSetup = (parentContainer, app) => {
    setInterval(() => { fishes(parentContainer, app); }, 3000);
};


