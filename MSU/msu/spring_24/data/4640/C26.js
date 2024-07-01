//put this line in the head of the html: <script src="https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.js"></script>
//link to this file in the body with this line: <script src="C26.js"></script>
//make sure file paths are correct

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

// Bouncing img[index] Logo
// Daniel Shiffman
// https://thecodingtrain.com/challenges/131-bouncing-img[index]-logo.html
// https://youtu.be/0j86zuqqTlQ
// https://editor.p5js.org/codingtrain/sketches/S-es-dYVn

/*
	_shader_chromatic-aberration
	https://github.com/spite/Wagner/blob/master/fragment-shaders/chromatic-aberration-fs.glsl
	remix cc teddavis.org 2020
*/

// define global variables for a texture (tex) and shader (warp)
let tex, theShader

let x;
let y;

let xspeed;
let yspeed;

let img = [];
let index = 0;

let crt;


function preload() {
  img[0] = loadImage('https://i.imgur.com/QqT8l7R.png');
  img[1] = loadImage('https://i.imgur.com/K6AxTuv.png');
  img[2] = loadImage('https://i.imgur.com/KdX3Fl3.png');
  img[3] = loadImage('https://i.imgur.com/o4ofS38.png');
  img[4] = loadImage('https://i.imgur.com/zulfE7j.png');
  img[5] = loadImage('https://i.imgur.com/oPjKS7k.png');
  img[6] = loadImage('https://i.imgur.com/o1R2bgk.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  x = random(width);
  y = random(height);
  xspeed = 3;
  yspeed = 3;
  
  pixelDensity(1) // fixes retina display offset
	setAttributes('antialias', true) // toggle depending on display / performance

	// create 2D/3D layer for graphics being passed into shader
	tex = createGraphics(width, height)
	tex.background(0)

	// load vert/frag defined below
	theShader = createShader(vertShader, fragShader)
	
}

function draw() {
  background(0);
  tex.background(0, 50);
  
  if(width > 1080){
  img[index].resize(width/4, 0);
  } else if (width < 1080){
  	img[index].resize(width/2, 0);
  }
  
  //translate(-width/2, -height/2);
  
  tex.image(img[index], x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + img[index].width >= width) {
    xspeed = -xspeed;
    x = width - img[index].width;
    index = index + 1;
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    index = index + 1;
  }

  if (y + img[index].height >= height) {
    yspeed = -yspeed;
    y = height - img[index].height;
    index = index + 1;
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    index = index + 1;
  }else if (index >= 6){
  	index = 0;
  }
  
  // text
	// tex.fill(255)
	// tex.textSize(tex.width / 15)
	// tex.textAlign(CENTER, CENTER)
	// tex.textLeading(150);
	// if(width < 1080){
	// 	tex.textLeading(75);
	// }
	// tex.text("CHANNEL 26\nGD CAPSTONE EXHIBITION\nAPRIL 17-23, 2024\nDEPOT & VAC GALLERY\nTUNE IN TO OUR SHOW!", tex.width / 2, tex.height / 2)
  
  // pass required uniforms to our shader (shadertoy style)
	theShader.setUniform("iResolution", [width, height])
	theShader.setUniform('iChannel0', tex) // pass layer here
	theShader.setUniform("iTime", frameCount * .01 + mouseX/5 + mouseY/5)
	theShader.setUniform("iMouse", [map(mouseX, 0, width, 0, 1), map(mouseY, 0, height, 0, 1)])

	shader(theShader) // apply shader
	rect(0, 0, width, height) // display shader

}

/* SHADER DEFINITIONS */

// standard p5js vertex shader
let vertShader = `
attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
}`


let fragShader = `
	precision mediump float;
	
	// add shadertoy uniform's as needed (check imported shader)
	uniform vec2 iResolution;
	uniform sampler2D iChannel0;
	uniform sampler2D iChannel1;
	uniform float iTime;
	uniform int iFrame;
	uniform vec2 iMouse;
	
	// Don't forget to change all 'texture' to 'texture2D' in pasted shader!
	//////	START SHADERTOY	//////
	
	// Loosely based on postprocessing shader by inigo quilez, License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
	
	vec2 curve(vec2 uv)
	{
		uv = (uv - 0.5) * 2.0;
		uv *= 1.1;	
		uv.x *= 1.0 + pow((abs(uv.y) / 5.0), 2.0);
		uv.y *= 1.0 + pow((abs(uv.x) / 4.0), 2.0);
		uv  = (uv / 2.0) + 0.5;
		uv =  uv *0.92 + 0.04;
		return uv;
	}
	void mainImage( out vec4 fragColor, in vec2 fragCoord )
	{
	    vec2 q = fragCoord.xy / iResolution.xy;
	    vec2 uv = q;
	    uv.y = 1.0 - uv.y;
	    uv = curve( uv );
	    vec3 oricol = texture2D( iChannel0, vec2(q.x,q.y) ).xyz;
	    vec3 col;
		float x =  sin(0.3*iTime+uv.y*21.0)*sin(0.7*iTime+uv.y*29.0)*sin(0.3+0.33*iTime+uv.y*31.0)*0.0017;
	
	    col.r = texture2D(iChannel0,vec2(x+uv.x+0.001,uv.y+0.001)).x+0.05;
	    col.g = texture2D(iChannel0,vec2(x+uv.x+0.000,uv.y-0.002)).y+0.05;
	    col.b = texture2D(iChannel0,vec2(x+uv.x-0.002,uv.y+0.000)).z+0.05;
	    col.r += 0.08*texture2D(iChannel0,0.75*vec2(x+0.025, -0.027)+vec2(uv.x+0.001,uv.y+0.001)).x;
	    col.g += 0.05*texture2D(iChannel0,0.75*vec2(x+-0.022, -0.02)+vec2(uv.x+0.000,uv.y-0.002)).y;
	    col.b += 0.08*texture2D(iChannel0,0.75*vec2(x+-0.02, -0.018)+vec2(uv.x-0.002,uv.y+0.000)).z;
	
	    col = clamp(col*0.6+0.4*col*col*1.0,0.0,1.0);
	
	    float vig = (0.0 + 1.0*16.0*uv.x*uv.y*(1.0-uv.x)*(1.0-uv.y));
		col *= vec3(pow(vig,0.3));
	
	    col *= vec3(0.95,1.05,0.95);
		col *= 2.8;
	
		float scans = clamp( 0.35+0.35*sin(3.5*iTime+uv.y*iResolution.y*1.5), 0.0, 1.0);
		
		float s = pow(scans,1.7);
		col = col*vec3( 0.4+0.7*s) ;
	
	    col *= 1.0+0.01*sin(110.0*iTime);
		if (uv.x < 0.0 || uv.x > 1.0)
			col *= 0.0;
		if (uv.y < 0.0 || uv.y > 1.0)
			col *= 0.0;
		
		col*=1.0-0.65*vec3(clamp((mod(fragCoord.x, 2.0)-1.0)*2.0,0.0,1.0));
		
	    float comp = smoothstep( 0.1, 0.9, sin(iTime) );
	 
		// Remove the next line to stop cross-fade between original and postprocess
	//	col = mix( col, oricol, comp );
	
	    fragColor = vec4(col,1.0);
	}
	
	//////	END SHADERTOY	//////
	
	// call shadertoy style above
	void main() {
	  mainImage(gl_FragColor, gl_FragCoord.xy);
	}
	// caling mainImage() tip from: https://github.com/n1ckfg/PShaderToy/blob/master/p5jsShaderToy/js/shaders/snow.frag#L137
`