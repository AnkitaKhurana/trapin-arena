/* eslint-disable import/first */
import * as PIXI from "pixi.js";
window.PIXI = PIXI;
import "pixi-particles";
import "pixi-spine";
import riverImageJson from "../Multimedia/images/1280x720/spine/riverExtra/riverExtra.json";

let addRiverExtra= (parentContainer) => {
  let riverExtraContainer = new PIXI.Container();
  let riverExtraImageAtlas = window.loader.resources.riverExtraAtlas;
  let spineAtlas = new PIXI.spine.core.TextureAtlas(riverExtraImageAtlas.data, function (image, callback) {
    callback(PIXI.BaseTexture.fromImage(image));
  }); 

  let spineAtlasLoader = new PIXI.spine.core.AtlasAttachmentLoader(spineAtlas)
  let spineJsonParser = new PIXI.spine.core.SkeletonJson(spineAtlasLoader);
  let spineData = spineJsonParser.readSkeletonData(riverImageJson);
  let riverExtraSpine = new PIXI.spine.Spine(spineData);

  riverExtraSpine.state.setAnimation(0, 'idle', true);
  riverExtraContainer.addChild(riverExtraSpine);
  riverExtraContainer.x = 410;
  riverExtraContainer.y = 400;
  riverExtraContainer.scale.x = (0.5)
  riverExtraContainer.scale.y = (0.5)  
  parentContainer.addChild(riverExtraContainer);
}
export let riverExtraSetup = (parentContainer) => {
    addRiverExtra(parentContainer);
};


