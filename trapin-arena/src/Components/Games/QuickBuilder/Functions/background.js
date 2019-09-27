"use strict";
import * as PIXI from "pixi.js";

let addMainBackground = (parentContainer) => {
    var texture = PIXI.Texture.from(window.loader.resources.mainGameBackground).texture;//mainBackgroundImage)//assets.mainGameBackground);
    var mainGameSprite = new PIXI.Sprite(texture);
    parentContainer.addChild(mainGameSprite);
}
export let mainBackgroundSetup = (parentContainer) => {
   addMainBackground(parentContainer);
};


