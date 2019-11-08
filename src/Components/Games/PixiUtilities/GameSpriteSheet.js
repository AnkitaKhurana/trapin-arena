import * as PIXI from "pixi.js";

export let GameSpriteSheet = (textureName, imageWidth, imageHeight, framePerRow, rows, animationSpeed = 1, scale = 1) => {
    let texture = new PIXI.Texture.from(window.loader.resources[textureName]).texture;
    let textureArray = [];
    let frameWidth = imageWidth / framePerRow;
    let frameHeight = imageHeight / rows;
    for (let currentRow = 0; currentRow < rows; currentRow++) {
        for (let currentFrame = 0; currentFrame < framePerRow; currentFrame++) {
            let obj = { ...texture };
            let tempNewTexture = new PIXI.Texture(obj.baseTexture, obj._frame);
            tempNewTexture._frame = new PIXI.Rectangle(frameWidth * currentFrame, currentRow * frameHeight, frameWidth, frameHeight);
            tempNewTexture.frame = new PIXI.Rectangle(frameWidth * currentFrame, currentRow * frameHeight, frameWidth, frameHeight);
            textureArray.push(tempNewTexture);
        }
    }

    var sprite = new PIXI.extras.AnimatedSprite(textureArray);
    sprite.animationSpeed = animationSpeed;
    sprite.scale.set(scale,scale);
    return sprite;
};
