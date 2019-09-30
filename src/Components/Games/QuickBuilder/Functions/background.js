"use strict";
import * as PIXI from "pixi.js";

let addMainBackground = (parentContainer) => {
    var texture = PIXI.Texture.from(window.loader.resources.mainGameBackground).texture;//mainBackgroundImage)//assets.mainGameBackground);
    let backgroundContainer = new PIXI.Container();
    var mainGameSprite = new PIXI.Sprite(texture);
    backgroundContainer.addChild(mainGameSprite)
    parentContainer.addChild(backgroundContainer);
}
export let mainBackgroundSetup = (parentContainer) => {
   addMainBackground(parentContainer);
};


