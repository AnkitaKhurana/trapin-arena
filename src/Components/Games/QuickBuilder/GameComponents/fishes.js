import * as PIXI from "pixi.js";
import { GameSpriteSheet } from "../../PixiUtilities/GameSpriteSheet.js";
import { BezierCurveAnimation } from "../../PixiUtilities/GameAnimations.js";
import { delay } from "q";

let fishes = (parentContainer, app) => {
    let fishesContainer = new PIXI.Container();
    for (let i = 0; i < 5; i++) {
        let points = [];
        let purpleFishSprite = GameSpriteSheet("purpleRightFacingFish", 1992, 981, 4, 3, 0.25, 0.5);
        purpleFishSprite.visible = false;
        purpleFishSprite.x = 500;
        purpleFishSprite.y = 400;
        purpleFishSprite.play();

        points.push(new PIXI.Point(500 * i, 400));
        points.push(new PIXI.Point(450 * i, 100));
        points.push(new PIXI.Point(250 * i, 100));
        points.push(new PIXI.Point(200 * i, 400));

        setTimeout(() => {
            purpleFishSprite.visible = true;
            BezierCurveAnimation(purpleFishSprite, points, app);
        }, i * 1000);
        fishesContainer.addChild(purpleFishSprite);

    }        parentContainer.addChild(fishesContainer);



}
export let fishesSetup = (parentContainer, app) => {
    fishes(parentContainer, app);
};


