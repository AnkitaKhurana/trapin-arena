import * as PIXI from "pixi.js";
import React from "react";
import { mainBackgroundSetup } from "./GameComponents/background.js";
import { cloudSetup } from "./GameComponents/cloud.js";
import { riverExtraSetup } from "./GameComponents/riverExtra.js";
import {fishesSetup} from "./GameComponents/fishes.js";

import mainBackgroundImage from "./Multimedia/images/1280x720/backgrounds/mg_background.jpg";
import purpleRightFacingFish from "./Multimedia/images/2dfishgameasset--184d9b3s952p2k4g3h/spritesheets/__cartoon_fish_06_purple_swim.png";
import cloudImageAtlas from "./Multimedia/images/1280x720/spine/mainGame/mainGame_background.atlas"; //your atlas file
import cloudimage from "./Multimedia/images/1280x720/spine/mainGame/mainGame_background.png"; //your atlas file
import riverExtraImage from "./Multimedia/images/1280x720/spine/riverExtra/riverExtra.png"; //your atlas file
import riverExtraAtlas from "./Multimedia/images/1280x720/spine/riverExtra/riverExtra.atlas"; //your atlas file



export default class QuickBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.pixi_cnt = null;
    this.app = new PIXI.Application({
      width: 1000,
      height: 600
    });
  }
  loadAllResources = mainGameContainer => {
    let loader = new PIXI.loaders.Loader();
    window.loader = loader;
    window.loader
    .add("mainGame_background.png",cloudimage)
     .add("purpleRightFacingFish",purpleRightFacingFish)
      .add("mainGameBackground", mainBackgroundImage)
      .add("cloudImageAtlas", cloudImageAtlas)
      .add("riverExtra.png",riverExtraImage)
      .add("riverExtraAtlas",riverExtraAtlas)

    window.loader.load();
    window.loader.onComplete.add(() => {
      this.setupGame(mainGameContainer);
    });
  };
  setupGame = mainGameContainer => {
    mainBackgroundSetup(mainGameContainer);
    cloudSetup(mainGameContainer);
    riverExtraSetup(mainGameContainer);
    fishesSetup(mainGameContainer, this.app);
  };
  initialize = () => {
    var mainGameContainer = new PIXI.Container();
    this.loadAllResources(mainGameContainer);
    this.app.stage.addChild(mainGameContainer);
  };
  updatePixiCnt = element => {
    // the element is the DOM object that we will use as container to add pixi stage(canvas)
    this.pixi_cnt = element;
    //now we are adding the application to the DOM element which we got from the Ref.
    if (this.pixi_cnt && this.pixi_cnt.children.length <= 0) {
      this.pixi_cnt.appendChild(this.app.view);
      this.initialize();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          ref={element => {
            this.updatePixiCnt(element);
          }}
        />
      </React.Fragment>
    );
  }
}

