import * as PIXI from "pixi.js";
import React from "react";
import { mainBackgroundSetup } from "./Functions/background.js";
import { cloudSetup } from "./Functions/cloud.js";

import mainBackgroundImage from "./Multimedia/images/1280x720/backgrounds/mg_background.jpg";
import cloudImageAtlas from "./Multimedia/images/1280x720/spine/mainGame/mainGame_background.atlas"; //your atlas file

export default class QuickBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.pixi_cnt = null;
    this.app = new PIXI.Application({
      width: 1000,
      height: 600,
      transparent: false
    });
  }
  loadAllResources = mainGameContainer => {
    let loader = new PIXI.loaders.Loader();
    window.loader = loader;
    window.loader
      .add("mainGameBackground", mainBackgroundImage)
      .add("cloudImageAtlas", cloudImageAtlas);

    window.loader.load();
    window.loader.onComplete.add(() => {
      this.setupGame(mainGameContainer);
    });
  };
  setupGame = mainGameContainer => {
    mainBackgroundSetup(mainGameContainer);
    cloudSetup(mainGameContainer);
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
