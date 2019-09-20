import * as PIXI from "pixi.js";
import React from "react";
import { mainBackgroundSetup } from "../QuickBuilder/Functions/backgroundFunctions.js";

export default class QuickBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.pixi_cnt = null;
    this.app = new PIXI.Application({
      width: 600,
      height: 600,
      transparent: false
    });
  }
  setupGame = mainGameContainer => {
    mainBackgroundSetup(mainGameContainer);
  };
  initialize = () => {
    //We will create a sprite and then add it to stage and (0,0) position
    //  this.avatar = new PIXI.Sprite(this.app.loader.resources["avatar"].texture);
    var mainGameContainer = new PIXI.Container();
    this.setupGame(mainGameContainer);
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
        <img src="./Games/QuickBuilder/Functions/image.jpg" />
      </React.Fragment>
    );
  }
}
