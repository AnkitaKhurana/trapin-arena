import * as PIXI from "pixi.js";
import React from "react";
import { mainBackgroundSetup } from "./GameComponents/background.js";
import { cloudSetup } from "./GameComponents/cloud.js";
import { riverExtraSetup } from "./GameComponents/riverExtra.js";
import { fishesSetup } from "./GameComponents/fishes.js";
import { scoreSetup } from "./GameComponents/score.js";

import mainBackgroundImage from "./Multimedia/images/1280x720/backgrounds/mg_background.jpg";
import purpleRightFacingFish from "./Multimedia/images/2dfishgameasset--184d9b3s952p2k4g3h/spritesheets/__cartoon_fish_06_purple_swim.png";
import cloudImageAtlas from "./Multimedia/images/1280x720/spine/mainGame/mainGame_background.atlas"; //your atlas file
import cloudimage from "./Multimedia/images/1280x720/spine/mainGame/mainGame_background.png"; //your atlas file
import riverExtraImage from "./Multimedia/images/1280x720/spine/riverExtra/riverExtra.png"; //your atlas file
import riverExtraAtlas from "./Multimedia/images/1280x720/spine/riverExtra/riverExtra.atlas"; //your atlas file
import "./quickBuilder.css";

export default class QuickBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.pixi_cnt = null;
    this.loadingAnimationAdded = false;
    this.app = new PIXI.Application({
      width: 1000,
      height: 600
    });
  }

  playLoadingAnimation = () => {
    let htmlLoadingElement = document.createElement("div");
    htmlLoadingElement.setAttribute("class", "loader");

    if (!this.loadingAnimationAdded)
      this.pixi_cnt.appendChild(htmlLoadingElement);
    this.loadingAnimationAdded = true;
    return htmlLoadingElement;
  };

  loadAllResources = mainGameContainer => {
    let loader = new PIXI.loaders.Loader();
    let loadingContainer = {};
    window.loader = loader;
    window.loader
      .add("mainGame_background.png", cloudimage)
      .add("purpleRightFacingFish", purpleRightFacingFish)
      .add("mainGameBackground", mainBackgroundImage)
      .add("cloudImageAtlas", cloudImageAtlas)
      .add("riverExtra.png", riverExtraImage)
      .add("riverExtraAtlas", riverExtraAtlas);

    window.loader.load();
    window.loader.onProgress.add(() => {
      loadingContainer = this.playLoadingAnimation();
    });
    window.loader.onComplete.add(() => {
     this.pixi_cnt.children[1].remove(); // TODO : find a better way to remove loader
      this.setupGame(mainGameContainer);
    });
  };
  setupGame = mainGameContainer => {
    mainBackgroundSetup(mainGameContainer);
    cloudSetup(mainGameContainer);
    riverExtraSetup(mainGameContainer);
    fishesSetup(mainGameContainer, this.app);
    scoreSetup(mainGameContainer);
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
          style={{position: "relative"}}
          ref={element => {
            this.updatePixiCnt(element);
          }}
        />
      </React.Fragment>
    );
  }
}
