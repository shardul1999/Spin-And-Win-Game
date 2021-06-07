# Spin-And-Win-Game

### Phaser is a framework that helps us in building a game.


game object k andr config object hoga which will contain the metadata of the game like kitne scene honge(meaning displays kitne honge and height kya hogi width kya hogi etc etc).
canvas toh config object mei create hojayega instead of html mei krna. or canvas ki height width wahi mention kr skte hain. "BackgroundColor"

scene means a level of the game. It consists of 3 main parts: loading the assets, creating and displaying,  updating continuously.
scene ki class banadena and as functions rkhdena usme inh teeno ko.

image is added in phaser using the sprite function.
let background=this.add.sprite(x,y,image_name);
background.position(W/2,H/2);
background.setScale(0.20) \\20% scaling of image
background.scaleX=2; //same as set scale but this is specifically for X coordinate. same with scaleY
//jab hum koi image baad mei load krenge canvas pr toh wo baakiyo k uppr hogi if you know what i mean.

"this" is referred to as scene object.

this term likkhkr kisi bhi img k variable ko scene ka object bana skte hain 
for eg this.wheel = this.add.sprite(...);

this.wheel.alpha=0.5; // for intensity.
alpha=1 opaque and 0 for invisible
in update we can try following stuff: -

this.wheel.angle+=1;
this.wheel.scaleX+=0.001;
this.wheel.scaleY+=0.001;


// event listener for mouse click
this.input.on("pointerdown",spinwheel,this);

tween effect
A Tween is able to manipulate the properties of one or more objects to any given value, based on a duration and type of ease.
tween = this.tweens.add({
        targets: this.wheel,  // desired object to deal with
        alpha: 0.1,  //itne pr aajayega dheere dheere iska yeh mtlb hai
        delay: 2000,  //itne time k baad start ho event
        duration: 8000, //itni der mei pura hoga event
		    ease: "Cubic.easeOut",  // ease out mtlb end tak aate aate speed slow hojaye instead of stopping instantly.
        onComplete:function(){
			console.log("jeet gye aap sir");   //event complete hone pr
		  }
    });

GOALS: -
creating a game using phaser
game loop in phaser
add images
event listeners
animations
arrays
mathematics
sounds
OOPs
and more.
