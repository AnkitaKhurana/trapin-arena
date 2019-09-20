varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSamplerAdditional;


uniform vec2 filterArea;
uniform vec2 dimensions;

uniform float waterAlpha;

uniform float iTime;
uniform float boundaryTop;

#define fragColor gl_FragColor
#define fragCoord gl_FragCoord
#define texture texture2D

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    vec2 uv = fragCoord.xy / dimensions.xy;
    vec2 uvMod = vTextureCoord;


    if(uv.y > 1.0-boundaryTop){
        fragColor = texture2D(uSampler, vTextureCoord.xy);
        return;
    }


        float areaY = boundaryTop * dimensions.y / filterArea.y;
        float v = areaY + areaY - vTextureCoord.y;
        //float y = mirror ? v : vTextureCoord.y;

        //uvMod.y =  1.0 - boundary - uvMod.y;

        uvMod.y =  v;//0.505 - uvMod.y;

        vec2 noiseStretch = vec2(1000.0, 100.0);
        float distanceRiverTraveled = iTime * 0.3;

        vec2 noisePosition = vec2(vTextureCoord.x/0.5, vTextureCoord.y/0.4) * 512.0  / noiseStretch;
              noisePosition.x += distanceRiverTraveled;

        float noise = texture2D(uSamplerAdditional, noisePosition).r;

        float xMove = noise * 0.15 - 0.1;

        vec2 imagePosition = vec2(
           	uvMod.x + xMove,
            uvMod.y
           );

        /*if(imagePosition.x>0.61){
            imagePosition.x = 0.61;//imagePosition.x - 0.5;
        }

        if(imagePosition.x<0.01){
            imagePosition.x = (0.61 - (0.01 - imagePosition.x))/5.0;
        }*/

        vec4 image = texture2D(uSampler, imagePosition) * vec4(0.5, 0.5, 0.8, waterAlpha);

        fragColor = image;
        //fragColor.a *= waterAlpha;


}
