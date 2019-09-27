/* eslint-disable import/first */
import * as PIXI from "pixi.js";
window.PIXI = PIXI;
import "pixi-particles";
import "pixi-spine";
import cloudImageJson from "../Multimedia/images/1280x720/spine/mainGame/mainGame_background.json";

let addClouds = (parentContainer) => {
  let cloudImageAtlas = window.loader.resources.cloudImageAtlas;
  let spineAtlas = new PIXI.spine.core.TextureAtlas(cloudImageAtlas.data, function (image, callback) {
    callback(PIXI.BaseTexture.fromImage(image));
  }); 

  let spineAtlasLoader = new PIXI.spine.core.AtlasAttachmentLoader(spineAtlas)
  let spineJsonParser = new PIXI.spine.core.SkeletonJson(spineAtlasLoader);
  let spineData = spineJsonParser.readSkeletonData(cloudImageJson);

  let cloudSpine = new PIXI.spine.Spine(spineData);


  cloudSpine.state.setAnimation(0, 'idle', true);

  parentContainer.addChild(cloudSpine);
}
export let cloudSetup = (parentContainer) => {
  addClouds(parentContainer);
};


