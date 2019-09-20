"use strict";
import * as PIXI from "pixi.js";
import mainBackgroundImage from '../Multimedia/images/1280x720/backgrounds/mg_background.jpg';

let addMainBackground = (parentContainer) => {
    var texture = PIXI.Texture.from(mainBackgroundImage)//assets.mainGameBackground);
    var mainGameSprite = new PIXI.Sprite(texture);
    parentContainer.addChild(mainGameSprite);
}
export let mainBackgroundSetup = (parentContainer) => {
    let loader = new PIXI.Loader();
    loader.add("mainGameBackground", mainBackgroundImage).load(addMainBackground(parentContainer));
};


