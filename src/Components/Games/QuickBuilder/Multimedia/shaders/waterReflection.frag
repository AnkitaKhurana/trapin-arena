varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSamplerAdditional;


uniform vec2 filterArea;
uniform vec2 dimensions;

uniform float iTime;
uniform float boundaryTop;
uniform float boundaryBottom;

#define fragColor gl_FragColor
#define fragCoord gl_FragCoord
#define texture texture2D

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    vec2 uv = fragCoord.xy / dimensions.xy;
    vec2 uvMod = vTextureCoord;


    if(uv.y < 1.0 - boundaryTop && uv.y > 1.0 - boundaryBottom){

        float areaY = boundaryTop * dimensions.y / filterArea.y;
        float v = areaY + areaY - vTextureCoord.y;

        vec2 noiseStretch = vec2(1000.0, 100.0);
        float distanceRiverTraveled = iTime;

        vec2 noisePosition = vec2(vTextureCoord.x/0.5, vTextureCoord.y/0.4) * 512.0  / noiseStretch;
             noisePosition.x += distanceRiverTraveled;

        float noise = texture2D(uSamplerAdditional, noisePosition).r;

        float xMove = noise * 0.15 - 0.1;

        vec2 imagePosition = vec2(
           	uvMod.x + xMove,
            uvMod.y
           );

        /*if(imagePosition.x>=0.91){
            imagePosition.x -= 0.9;
        }

        if(imagePosition.x<0.01){
            imagePosition.x = (0.9 - (0.01 - imagePosition.x))/5.0;
        }*/

        vec4 image = texture2D(uSampler, imagePosition);

        fragColor = image;//vec4(1.0,0.0,1.0,1.0);
    } else {
        fragColor = texture2D(uSampler, vTextureCoord.xy);
    }

}
